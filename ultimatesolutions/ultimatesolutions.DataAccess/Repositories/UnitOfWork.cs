using HandmadeStore.DataAccess.Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ultimatesolutions.DataAccess.Data;
using ultimatesolutions.DataAccess.IRepository;

namespace ultimatesolutions.DataAccess.Repositories
{
    public class UnitOfWork:IUnitOfWork
    {
        private readonly ApplicationDbContext _context;
        public ICustomer customer { get; private set; }
        public ICustomerDetails customerDetails { get; private set; }



        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
            customer = new CustomerRepository(context);
            customerDetails = new CustomerDetailsRepository(context);

        }

        public bool Save()
        {
           var result = _context.SaveChanges();
            return result > 0;
        }
    }
}
