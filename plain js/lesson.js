// Reducer function

const setCountReducer = (state, action) => {
    if (action.type === 'increase') {
        return state + 1;
    }
    if (action.type === 'decrease') {
        return state - 1;
    }
    return state;
}

// because of same input values we can always expect the same output
// expect(setCountReducer(0, { type: 'increase' })).to.equal(1);
// expect(setCountReducer(0, { type: 'increase' })).to.equal(1);

//  other set of transition
// expect(setCountReducer(0, { type: 'decrease' })).to.equal(-1);

// if an unmatching action type is defined the current state is returned.

// expect(setCountReducer(0, { type: 'unmatching_action' })).to.equal(0);

console.log(setCountReducer(0, { type: 'increase' }));
console.log(setCountReducer(0, { type: 'decrease' }));

// using switch statement
const countReducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            return state;
    }
}

console.log(countReducer(0, { type: 'INCREASE' }));

// changing the person lastname using the reducer function

const personReducer = (person, action) => {
    switch (action.type) {
        case 'INCREASE_AGE':
            return { ...person, age: person.age + 1 };
        case 'CHANGE_LASTNAME':
            return { ...person, lastname: action.lastname };
        default:
            return person;
    }
}

//  we will change the person lastname the following in the test enviroment.

const initialState = {
    firstname: 'john',
    lastname: 'mbugua',
    age: 23
};

const action = {
    type: 'CHANGE_LASTNAME',
    // an action provided for reducer function can have an optional payload(i.e lastname) next to the mandatory
    // action type property
    // the payload is additional information to perform payload. our reducer function wont know the new last name of
    // the person without additional information.
    /*
    often the payload of an action is put into another generic payload property to keep the top level properties
    of action object more general

    const action = {
        type:'CHANGE_LASTNAME',
        payload:{
         lastname:'njeri',
        },
    }
    the reducer function will also have to change
    return {...person, lastname:action.payload.lastname};

    */
    lastname: 'njeri',
};

const result = personReducer(initialState, action);

console.log(result);