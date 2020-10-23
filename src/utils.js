export function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`
}

export function css(styles = {}) {
    if (typeof styles === 'string') return styles
    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}

export function block(type) {
    return `
        <form name="${type}">
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="${type === 'image' ?  'image description' : 'value'}" required/>
            </div>

            <div class="form-group">
                <input type="checkbox" name="defaultStyles" id="defaultStyles${type}"/><label for="defaultStyles${type}" style="margin-left: 5px;">use default styles</label>
            </div>

            <div class="form-group">
                <select size="1" name="position" class="form-control form-control-sm">
                    <option style="color: grey;">position</option>
                    <option value="left">left</option>
                    <option value="center">center</option>
                    <option value="right">right</option>
                </select>
            </div>

            ${type === 'image'
                ? `<div class="form-group">
                        <input name="image" class="form-control form-control-sm" placeholder="img url" required>
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control form-control-sm" name="width" min="1" placeholder="width in px"/>
                        <input type="number" class="form-control form-control-sm" name="height" min="1" placeholder="height in px"/>
                    </div>
                    <div class="form-group">
                        <input name="imageStyles" class="form-control form-control-sm" placeholder="your img styles">
                    </div>`
                : `<div class="form-group">
                        <input type="number" class="form-control form-control-sm" name="textSize" min="1" placeholder="text size in px"/>
                    </div>
                    <div class="form-group">
                        <input type="color" name="textColor"/>
                        <span>text color</span>
                    </div>
                `}

            <div class="form-group">
                <input type="color" name="background" value="#ffffff"/>
                <span>background</span>
            </div>

            <div class="form-group">
                <input class="form-control form-control-sm" name="styles" placeholder="your styles"/>
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Add ${type}</button>
            <hr/>
        </form>
    `
}

export function columns(countColumns) {

    let inputs = [];
    for(let i = 0; i < countColumns; i++){
        inputs.push(`<div class="form-group">
                        <input class="form-control form-control-sm" name="value" placeholder="column text"/>
                    </div>`)
    }

    return `
        <div id="columns">
            <h5>columns</h5>
            <form name="addColumns">
                <div class="form-group">
                    <input type="number" class="form-control form-control-sm" name="countColumns" min="2" placeholder="count columns" required/>
                    <button type="submit" class="btn btn-primary btn-sm">add count columns</button>
                </div>
            </form>
            
            <form name="columns">
                ${inputs.join('')}

                <div class="form-group">
                    <input type="checkbox" name="defaultStyles" id="defaultStylesCol"/><label for="defaultStylesCol" style="margin-left: 5px;">use default styles</label>
                </div>

                <div class="form-group">
                    <select size="1" name="position" class="form-control form-control-sm">
                        <option style="color: grey;">position</option>
                        <option value="left">left</option>
                        <option value="center">center</option>
                        <option value="right">right</option>
                    </select>
                </div>
                <div class="form-group">
                    <input type="color" name="textColor"/>
                    <span>text color</span>
                </div>
                <div class="form-group">
                    <input type="color" name="background" value="#ffffff"/>
                    <span>background</span>
                </div>
                <div class="form-group">
                    <input type="number" class="form-control form-control-sm" name="textSize" min="1" placeholder="text size in px"/>
                </div>
                <div class="form-group">
                    <input class="form-control form-control-sm" name="styles" placeholder="your styles"/>
                </div>

                <button type="submit" class="btn btn-primary btn-sm">Add columns</button>
                <hr/>
            </form>
        </div>
    `
}