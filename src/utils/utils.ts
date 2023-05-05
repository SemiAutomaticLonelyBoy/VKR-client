export const getType = (type: any) => {
    switch (type) {
        case 'integer': {
            return "number"
        }
        case 'text' : {
            return
        }
        case 'boolean': {
            return "checkbox"
        }
        default : {
            return
        }
    }
}