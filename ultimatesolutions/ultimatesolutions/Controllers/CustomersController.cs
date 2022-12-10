using AutoMapper;
using HandmadeStore.DataAccess.Repository.IRepository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using portal.speedspot.Models.Constants;
using ultimatesolutions.Model.Models;
using ultimatesolutions.Model.ViewModel;

namespace ultimatesolutions.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        protected IMapper _mapper;


        public CustomersController(IUnitOfWork iunitOfWork, IMapper mapper)
        {
            _mapper = mapper;
            _unitOfWork = iunitOfWork;
        }
        [HttpGet]
        public IActionResult GetCustomer()
        {
            List<Customer> Customers = _unitOfWork.customer.GetAll(null, includeProperties: "CustomerDetails");
            var customersVm = _mapper.Map<List<CustomerViewModel>>(Customers);

            return Ok(customersVm);
        }

        [HttpGet("{id}")]
        public IActionResult GetBuyId(int Id)
        {
            var Customer = _unitOfWork.customer.GetFirstOrDefault(x => x.Id == Id, includeProperties: "CustomerDetails");
            var customerVm = _mapper.Map<CustomerViewModel>(Customer);
            //var customerVm = _mapper.Map<CustomerViewModel>(Customer);
            if (Customer == null)
            {
                return NotFound($"No genre was found with ID: {Id}");
            }
            return Ok(customerVm);
        }

        [HttpPost]
        public IActionResult PostCustomer(CustomerViewModel model)
        {
            CustomerViewModel customer = new CustomerViewModel()
            {
                Code = model.Code,
                Name = model.Name,
                Description = model.Description,
                Mobile = model.Mobile,
            };

            List<CustomerDetailsViewModel> CustomerDetails = new List<CustomerDetailsViewModel>();
            foreach (var details in model.CustomerDetailsVM)
            {
                CustomerDetails.Add(details);
            }

            customer.CustomerDetailsVM = CustomerDetails;

            var mapCustomer = _mapper.Map<Customer>(customer);
            _unitOfWork.customer.Add(mapCustomer);
            var res = _unitOfWork.Save();

            if (res)
            {
                return Ok(new
                {
                    status = true
                });
            }
            else
            {

                return BadRequest(new ValidationProblemDetails(ModelState));
            }

        }

        [HttpPut("{id}")]
        public IActionResult UpdateCustomer(int id, CustomerViewModel model)
        {
            var Customer = _unitOfWork.customer.GetFirstOrDefault(x => x.Id == id);
            //var customerVm = _mapper.Map<CustomerViewModel>(Customer);
            if (Customer == null)
            {
                return NotFound($"No genre was found with ID: {id}");
            }

            if (ModelState.IsValid)
            {
                var custoerDetails = _unitOfWork.customerDetails.GetAll(x => x.CustomerId == id);
                _unitOfWork.customerDetails.RemoveRange(custoerDetails);
                _unitOfWork.Save();
                CustomerViewModel customer = new CustomerViewModel()
                {
                    Id = id,
                    Code = model.Code,
                    Name = model.Name,
                    Description = model.Description,
                    Mobile = model.Mobile,
                };

                List<CustomerDetailsViewModel> CustomerDetails = new List<CustomerDetailsViewModel>();
                foreach (var details in model.CustomerDetailsVM)
                {
                    details.CustomerId = id;
                    CustomerDetails.Add(details);
                }

                customer.CustomerDetailsVM = CustomerDetails;

                var mapCustomer = _mapper.Map<Customer>(customer);
                _unitOfWork.customer.ClearChangeTracking();

                _unitOfWork.customer.Update(mapCustomer);
                var res = _unitOfWork.Save();

                if (res)
                {
                    return Ok(new
                    {
                        status = true
                    });
                }
                else
                {
                    return BadRequest(res);
                }
            }
            return BadRequest(ModelState);
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteCustomer(int id)
        {
            var Customer = _unitOfWork.customer.GetFirstOrDefault(x => x.Id == id);
            //var customerVm = _mapper.Map<CustomerViewModel>(Customer);
            if (Customer == null)
                return NotFound($"No genre was found with ID: {id}");

            _unitOfWork.customer.Remove(Customer);
            _unitOfWork.Save();
            return Ok(Customer);
        }

    }
}
