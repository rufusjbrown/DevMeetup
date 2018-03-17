<template>
  <v-container>
    <v-layout row wrap class="mb-2 mt-2">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetups/new" class="info">Organise Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="meetup in meetups" :src="meetup.imageUrl" :key="meetup.id">
          <div class="title">
            {{ meetup.title }}
          </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      meetups: [
        { imageUrl: 'https://cdn.pixabay.com/photo/2015/12/08/00/32/london-1081820_960_720.jpg', id: 'djflsjflsdjf23', title: 'Meetup in London' },
        { imageUrl: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', id: 'dsfsdjlk2lj2', title: 'Meetup in Paris' }
      ]
    }
  }
}
</script>

<style scoped>
  .title {
    position: center;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>


