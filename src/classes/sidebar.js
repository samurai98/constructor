import { block, columns } from '../utils'
import { TextBlock, TitleBlock, ImageBlock, ColumnsBlock } from './blocks'

import {model} from '../model'

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector)
        this.update = updateCallback

        this.countColumns = 3

        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add.bind(this))
    }

    get template() {
        return [
            block('title'),
            block('text'),
            block('image'),
            columns(this.countColumns)
        ].join('')
    }

    add(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value ? event.target.value.value : ''
        const userStyles = event.target.styles ? event.target.styles.value : ''

        const imageStyles = event.target.imageStyles ? event.target.imageStyles.value : ''
        const imageUrl = event.target.image ? event.target.image.value : ''

        const position = event.target.position ? event.target.position.value : ''
        const textSize = event.target.textSize ? event.target.textSize.value : ''
        const backgroundColor = event.target.background ? event.target.background.value : ''
        const textColor = event.target.textColor ? event.target.textColor.value : ''
        const finalStyles = userStyles + ';' + `
                            text-align: ${position}; 
                            font-size: ${textSize}px !important; 
                            background-color: ${backgroundColor};
                            color: ${textColor};
                            justify-content: ${position === 'right' ? 'flex-end' : position};`

        const defaultStyles = event.target.defaultStyles ? event.target.defaultStyles.checked : false

        let newBlock
        switch (type) {
            case 'title':
                defaultStyles 
                    ? newBlock = new TitleBlock(value, model[0].options)
                    : newBlock = new TitleBlock(value, { styles: finalStyles })
                break
            case 'text':
                defaultStyles 
                    ? newBlock = new TextBlock(value, model[1].options)
                    : newBlock = new TextBlock(value, { styles: finalStyles })
                break
            case 'image':
                if(defaultStyles) {
                    newBlock = new ImageBlock(imageUrl, {...model[2].options, alt: event.target.image.value})
                    event.target.image.value = ''
                    break
                }
                const {height, width} = event.target
                const options = {
                    imageStyles: imageStyles + `;height: ${height.value}px; width: ${width.value}px;`,
                    alt: value,
                    styles: finalStyles
                }
                newBlock = new ImageBlock(imageUrl, options)

                event.target.imageStyles.value = ''
                event.target.image.value = ''
                event.target.height.value = ''
                event.target.width.value = ''
                break
            case 'columns':
                const columnsArr = Array.from(event.target.value).map(el => el.value)
                
                defaultStyles 
                    ? newBlock = new ColumnsBlock(columnsArr, model[3].options)
                    : newBlock = new ColumnsBlock(columnsArr, { styles: finalStyles })

                Array.from(event.target.value).map(el => el.value = '')
                break
            case 'addColumns':
                document.querySelector('#columns').innerHTML = ''
                const newCountColumns = event.target.countColumns.value
                document.querySelector('#columns').insertAdjacentHTML('afterbegin', columns(newCountColumns))
                break
            default:
                alert('some error')
        }

        if(type !== 'addColumns') {
            this.update(newBlock)

            event.target.value.value = ''
            event.target.styles.value = ''
            event.target.textSize.value = ''
        }
    }
}

