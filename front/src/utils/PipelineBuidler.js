

export default function PipelineBuilder(props) {

    var pipeline = {}
    if (props.text !== "")
        pipeline["research"] = props.text

    if (props.filter !== "")
        pipeline["match"] = toMatchBuilder(props.filter)

    pipeline["sort"] = toSortBuilder(props.sort)

    return JSON.stringify(pipeline)   
}

function toMatchBuilder(props) {

    var formValue = JSON.parse(props)
    var pipeline = {}

    var category;
    var field;

    for (category in formValue)
    {
        var filter = []
        for (field in formValue[category])
        {
            var field_value = formValue[category][field]
            if (field_value)
            {
                filter.push(field)
            }
                
        }
        pipeline[category] = filter
    }
    return pipeline
}

function toSortBuilder(sortValue) {

    switch(sortValue) {
        case "0":
            return [["name",1]]
        case "1":
            return [["name", -1]]
        case "2":
            return [["university", 1],["name",1]]
        default:
            return [["tag", 1]]
    }

}