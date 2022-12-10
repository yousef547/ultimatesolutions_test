using AutoMapper;
using ultimatesolutions.Model.Models;
using ultimatesolutions.Model.ViewModel;

namespace ultimatesolutions.Infrastracture
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<CustomerViewModel, Customer>()
               .ForMember(x => x.CustomerDetails, y => y.MapFrom(z => z.CustomerDetailsVM))
               .ReverseMap()
               .ForMember(x => x.CustomerDetailsVM, y => y.MapFrom(z => z.CustomerDetails));

            CreateMap<CustomerDetailsViewModel, CustomerDetails>()
              .ReverseMap();


        }
    }
}
