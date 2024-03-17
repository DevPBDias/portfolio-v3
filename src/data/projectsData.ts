import oleImg from '../assets/projects/ole.png'
import coachImg from '../assets/projects/coach.png'


export const projectsData = [
    {
        id: 1,
        name: 'Olé midia website V3',
        year: 2024,
        category: 'Freelancer',
        description: 'Website made to Ole Midia company for their clients know more about them and look the services they can handle',
        image: oleImg,
        inGroup: false,
        link: 'https://olemidia.com.br/',
        techs: [ 'React js', "Javascript", 'Typescript', 'Styled-components', 'Email js', 'Framer motion']
    },
    {
        id: 2,
        name: 'Coach Evertinho website',
        year: 2023,
        category: 'Freelancer',
        description: 'Website to improve the sales of the Coach Evertinho. Clients can watch depoiments and see the services he can make for them',
        image: coachImg,
        inGroup: false,
        link: 'https://www.treinadorevertinho.com.br/maxtrainingperformance',
        techs: [ 'React js', "Javascript", 'Typescript', 'Styled-components']
    }
]