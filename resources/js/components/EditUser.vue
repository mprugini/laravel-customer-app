<template>
    <div>
        <br>
        <h3>Update User</h3>
        <form v-on:submit="updateUser">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" name="name" id="name" aria-describedby="nameHelp" placeholder="Enter your name..." v-model="user.name" required>
            </div>

            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email..." v-model="user.email" required>
            </div>

            <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="text" class="form-control" name="phone" id="phone" aria-describedby="phoneHelp" placeholder="Enter your phone number..." v-model="user.phonenumber" required>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    props: ['user'],
    methods: {
        updateUser(e) {
            e.preventDefault();
            let updatedUser = {
                name: this.user.name,
                email: this.user.email,
                phone: this.user.phonenumber
            };
            let id = this.user.id;

            axios.post('/users/' + id, {
                data: updatedUser,
                _method: 'put'
            })
                .then(res => {
                    this.$noty.success("You have updated an existing user!");
                    this.$router.push({ path: '/' });
                })
                .catch(err => console.log(err));
        }
    }
}
</script>

<style>

</style>
