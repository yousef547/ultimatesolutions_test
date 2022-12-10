using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ultimatesolutions.DataAccess.IRepository;

namespace HandmadeStore.DataAccess.Repository.IRepository
{
    public interface IUnitOfWork
    {
        ICustomer customer { get; }
        ICustomerDetails customerDetails { get; }

        bool Save();
    }
}
