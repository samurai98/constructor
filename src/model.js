import image from './assets/image.jpg'
import {TitleBlock, TextBlock, ImageBlock, ColumnsBlock} from './classes/blocks'

export const model = [
    new TitleBlock(
        'Sites constructor', 
        {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                'text-align': 'center', 
                padding: '1.5rem',
                'font-size': '2rem'
            }
        }
    ),
    new TextBlock(
        'Hi! This is a simple constructor. In this section you can see default styles for blocks. In the left panel, you can use various tools to create your site, which will appear below.',
        {
            styles: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                padding: '1rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }
    ),
    new ImageBlock(
        image, 
        {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            },
            imageStyles: {
                width: '500px',
                height: 'auto',
            },
            alt: 'Kartinka)'
        }
    ),
    new ColumnsBlock(
        [
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an',
            'a galley of type and scrambled it to make a type specimen book. ',
            'Lorem Ipsum has been the industrys standard dummy',
            'text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
            'JavaScript'
        ],
        {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }
    )
]