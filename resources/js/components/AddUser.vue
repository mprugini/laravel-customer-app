<template>
    <div>
        <br>
        <h3>Add New User</h3>
        <form v-on:submit="addNewUser">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" name="name" id="name" aria-describedby="nameHelp" placeholder="Enter your name..." v-model="user.userName" required>
            </div>

            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email..." v-model="user.userEmail" required>
            </div>

            <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="text" class="form-control" name="phone" id="phone" aria-describedby="phoneHelp" placeholder="Enter your phone number..." v-model="user.userPhone" required>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            user: {
                userName: '',
                userEmail: '',
                userPhone: ''
            }
        }
    },
    methods: {
        addNewUser(e) {
            e.preventDefault();
            let newUser = {
                name: this.user.userName,
                email: this.user.userEmail,
                phone: this.user.userPhone,
            };

            axios.post('/users/create', newUser)
                .then(res => {
                    this.$noty.success("You have registered a new user!");
                    this.$router.push({ path: '/' });
                })
                .catch(err => console.log(err));
        }
    }
}
</script>

<style>

</style>
