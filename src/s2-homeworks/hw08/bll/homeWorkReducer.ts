import { UserType } from '../HW8';

type ActionType = { type: 'sort'; payload: 'up' | 'down' } | { type: 'check'; payload: number };

export const homeWorkReducer = (state: UserType[], action: ActionType): any => {
  // need to fix any
  switch (action.type) {
    case 'sort': {
      // by name
      if (action.payload === 'up') {
        return state.sort((a, b) => a.name.toLocaleLowerCase().localeCompare(b.name));
      } else {
        return state.sort((a, b) => b.name.toLocaleLowerCase().localeCompare(a.name));
      }
      // need to fix
    }
    case 'check': {
      const checkAge = state.filter((age) => {
        if (age.age > action.payload) {
          return age.age;
        }
      });
      return checkAge;
    }

    default:
      return state;
  }
};
