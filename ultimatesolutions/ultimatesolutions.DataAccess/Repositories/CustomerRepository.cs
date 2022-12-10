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
    public class CustomerRepository : Repository<Customer>, ICustomer
    {
       private readonly ApplicationDbContext _context;
        public CustomerRepository(ApplicationDbContext context):base(context)
        {
            _context = context;
        }


        public void Update(Customer customer)
        {
            _context.Customers.Update(customer);
        }
    }
}
