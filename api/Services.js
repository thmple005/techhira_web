import simg1 from '/public/images/services/icon-1.svg'
import simg2 from '/public/images/services/icon-2.svg'
import simg3 from '/public/images/services/icon-3.svg'
import simg4 from '/public/images/services/icon-4.svg'

import sSimg1 from '/public/images/service-single/1.jpg'
import sSimg2 from '/public/images/service-single/1.png'
import sSimg3 from '/public/images/service-single/3.jpg'
import sSimg4 from '/public/images/service-single/4.jpg'




const Services = [
   {
      Id: '01',
      sImg: simg2,
      sSImg: sSimg2,
      spanNumber: '01',
      title: 'App Development',
      slug: '/service-app/app-development',
      description: 'Get all aspects of mobile app development, from ideation to delivery, to ongoing support and maintenance, all at one place.',
   },
   {
      Id: '02',
      sImg: simg3,
      sSImg: sSimg3,
      spanNumber: '02',
      title: 'Web Development',
      slug: '/service-web/web-development',
      description: 'Develop fast, feature-rich, and digitally transformative web products using the latest technologies like AI.',
   },
   {
      Id: '03',
      sImg: simg1,
      sSImg: sSimg1,
      spanNumber: '03',
      title: 'UI/UX Design',
      slug: '/service-ui/ui-design',
      description: 'Create elegant and smooth UI/UX prototypes to improve the user experience through effective collaboration, and better results.',
   },
   {
      Id: '04',
      sImg: simg4,
      sSImg: sSimg4,
      spanNumber: '04',
      title: 'Ecommerce',
      slug: '/service-ecommerce/ecommerce',
      description: 'Deliver seamless and compelling shopping experiences to your customers with our comprehensive Ecommerce development services.',
   },

]

export default Services;