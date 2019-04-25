export const ON_SUBMIT = 'ON_SUBMIT';


export function onSubmit(state){

    return {
        type : ON_SUBMIT,
        payload : state
    }
}

