<template>
    <div>
        <br>
        <div class="float-left"><h3>Registered Users</h3></div>
        <div class="float-right">
            <router-link to="/add"><button class="btn btn-primary"><i class='fas fa-user'></i> Add New User</button></router-link>
        </div>
        <table class="table table-bordered table-stripped">
            <thead>
                <tr class="bg-info text-light">
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phonenumber }}</td>

                    <td>
                        <router-link :to="{ name: 'User', params: { user } }">
                            <i class='fas fa-edit' style="color: blue;"></i>
                        </router-link>
                    </td>
                    <td>
                        <i class='fas fa-trash' style="color: red; cursor: pointer;" @click="deleteUser(user.id)"></i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        this.fetchUsers();
    },
    methods: {
        fetchUsers() {
            axios.get('/users')
                .then(res => {
                    this.users = res.data
                })
                .catch(error => console.log(error));
        },
        deleteUser(id) {
            axios.delete(`/user/${id}`)
                .then(data => {
                    this.fetchUsers();
                    this.$noty.warning("You have deleted a user!");
                })
                .catch(error => console.log(error));
        }
    }
}
</script>

<style>

</style>
