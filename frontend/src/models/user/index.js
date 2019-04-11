import { Model, Collection } from 'vue-mc';

export class User extends Model {
    defaults() {
        return {
            id: null,
            name: null,
            email: null,
            user_type: null,
            customer_id: null,
        }
    }
    routes() {
        return {
            fetch: '/users/{id}',
            save: '/users',
        }
    }
}

export class UserList extends Collection {
    model() {
        return User;
    }
    defaults() {
        return {
            orderBy: 'name',
        }
    }
    routes() {
        return {
            fetch: '/users',
        }
    }
}

export default User;