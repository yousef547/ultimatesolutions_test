using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ultimatesolutions.Model.ViewModel
{
    public class CustomerDetailsViewModel
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Enter City")]
        public string City { get; set; }

        [Required(ErrorMessage = "Enter Zone")]
        public string Zone { get; set; }

        [Required(ErrorMessage = "Enter Street")]
        public string Street { get; set; }

        [Required(ErrorMessage = "Enter Buliding")]
        public string Buliding { get; set; }
        [Required(ErrorMessage = "Enter Floor")]
        public string Floor { get; set; }
        public int CustomerId { get; set; }
    }
}
