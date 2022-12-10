using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ultimatesolutions.Model.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Mobile { get; set; }
        public string Description { get; set; }
        public IList<CustomerDetails> CustomerDetails { get; set; }
    }
}
