import React from "react";

const todos = [
    {
        id: 'a',
        task: 'learn react',
        complete: false,
    },
    {
        id: 'b',
        task: 'learn angular',
        complete: false,
    },
];

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'TO_DO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, complete: true };
                } else {
                    return todo;
                }
            });
        case 'UN_DO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, complete: false };
                } else {
                    return todo;
                }
            });
        default:
            return state;

    }
}

const action = {
    type: 'TO_DO',
    id: 'b',
};

const newReducer = todoReducer(todos, action);

console.log(newReducer);

const ListReducer = () => {
    const [lists, diptchFun] = React.useReducer(todoReducer, todos);
    const handleChange = () => {
        diptchFun({ type: 'TO_DO', id: 'a' });
    }
    return (
        <>
            <ul>
                {lists.map(todo => {
                    return (
                        <li key={todo.id}>
                            <input
                                type="checkbox"
                                checked={todo.complete}
                                onChange={handleChange}
                            />
                            {todo.task}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}




// const initialPerson = {
//     firstName: 'mary',
//     lastName: 'mbugua',
//     age: 30,
// };

// const personName = (person, action) => {
//     switch (action.type) {
//         case 'INCREASE_AGE':
//             return { ...person, AGE: person.age + 1 };
//         case 'CHANGE_NAME':
//             return { ...person, lastname: action.lastName };
//         default:
//             return person;
//     }
// }

// const action = {
//     type: 'CHANGE_NAME',
//     lastName: 'njeri',
// };

// const result = personName(initialPerson, action);
// console.log(result);


export default ListReducer;