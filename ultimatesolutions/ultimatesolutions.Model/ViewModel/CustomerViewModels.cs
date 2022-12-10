using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ultimatesolutions.Model.ViewModel
{
    public class CustomerViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Enter Code")]
        public string Code { get; set; }
        [Required(ErrorMessage = "Enter Name")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Enter Mobile")]
        public string Mobile { get; set; }

        [Required(ErrorMessage = "Enter Description")]
        public string Description { get; set; }
        public IList<CustomerDetailsViewModel> CustomerDetailsVM { get; set; }
    }
}
