import extensions from "../constants/extensions"

function File({ name }) {

    const indexOfPoint = name.lastIndexOf('.')
    let ext = null

    if (indexOfPoint != -1) {
        ext = name.slice(indexOfPoint + 1)
    }
        

    return (
        <div style={{'display': 'flex', 'alignItems': 'center', 'gap': '6px' }}>
            {indexOfPoint && extensions.find(extension => extension.name == ext) && extensions.find(extension => extension.name == ext).element}
            {name}
        </div>
    )
}

export default File