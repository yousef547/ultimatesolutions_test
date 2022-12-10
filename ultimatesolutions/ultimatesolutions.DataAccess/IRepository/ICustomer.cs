using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ultimatesolutions.Model.Models;

namespace ultimatesolutions.DataAccess.IRepository
{
    public interface ICustomer :IRepository<Customer>
    {

        void Update(Customer Customer);

    }

}
