

export default function PipelineBuilder(props) {

    var pipeline = {}
    pipeline["match"] = toMatchBuilder(props)

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