using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ultimatesolutions.DataAccess.IRepository
{
    public interface IRepository<t> where t : class
    {
        List<t> GetAll(Expression<Func<t, bool>> filter = null, string includeProperties = null);
        t GetFirstOrDefault(Expression<Func<t, bool>> filter, string includeProperties = null);
        void Add(t entity);
        void Remove(t entity);
        void RemoveRange(List<t> entity);

        void ClearChangeTracking();
    }
}
