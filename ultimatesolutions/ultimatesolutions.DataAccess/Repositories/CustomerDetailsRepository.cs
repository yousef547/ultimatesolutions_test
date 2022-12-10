using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ultimatesolutions.DataAccess.Data;
using ultimatesolutions.DataAccess.IRepository;
using ultimatesolutions.DataAccess.Repository;
using ultimatesolutions.Model.Models;

namespace ultimatesolutions.DataAccess.Repositories
{
    public class CustomerDetailsRepository:Repository<CustomerDetails>,ICustomerDetails
    {
        private readonly ApplicationDbContext _context;

        public CustomerDetailsRepository(ApplicationDbContext context):base(context)
        {
            _context = context;

        }

        //public void Update(CustomerDetails Detail)
        //{
        //    _context.CustomerDetails.Update(Detail);
        //}
    }
}
