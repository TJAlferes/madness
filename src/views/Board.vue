<template>
  <div id="board">

    <div id="board-header">
      <span class="col1">Forum</span>
      <span class="col2">Threads</span>
      <span class="col3">Posts</span>
      <span class="col4">Last Post</span>
      <span class="col5">Moderator</span>
    </div>

    <div id="board-rows">
      <div
        class="board-row"
        v-for="forum of forums"
        v-bind:key="forum.forum_id"
      >
        <span class="col1">
          <router-link class="non-green" to="/forum/:forum.forum_id">
            {{ forum.forum_name }}
          </router-link>
          <br>
          {{ forum.forum_description }}
        </span>
        <span class="col2 lh">{{ forum.thread_count }}</span>
        <span class="col3 lh">{{ forum.post_count }}</span>
        <span class="col4 lh">{{ forum.latest_post }}</span>
        <span class="col5 lh">{{ forum.moderator }}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      forums: [
        {forum_id: 1, forum_name: "Liberal Arts", forum_description: "some description here", thread_count: 58, post_count: 2396, latest_post: "Some Post Abo...", moderator: "Giveadont"},
        {forum_id: 2, forum_name: "Mechanical Arts", forum_description: "some description here", thread_count: 93, post_count: 8182, latest_post: "Some Post Abo...", moderator: "Giveadont"},
        {forum_id: 3, forum_name: "Survival", forum_description: "some description here", thread_count: 10, post_count: 182, latest_post: "Some Post Abo...", moderator: "Giveadont"}
      ]
    }
  }
};
</script>

<style>
#board {
  padding: 12px;
  margin: 0 auto 0 auto;
  border: none;
}

#board-header {
  width: 100%;
  display: flex;
  background-color: #999;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

#board-header span {
  display: inline-block;
  padding: 4px;
}

.board-row {
  width: 100%;
  display: flex;
  vertical-align: top;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

.board-row span {
  display: inline-block;
  height: 40px;
  margin: 4px 0;
  padding: 4px;
  font-size: 14px;
  border-right: 1px solid #fff;
  vertical-align: middle;
}

.non-green {
  line-height: 1.2;
  font-size: 15px;
  font-weight: bold;
  color: #222;
}

.non-green:hover,
.non-green:active {
  color: #a74ac7;
  text-decoration: underline;
}

#board-rows div:nth-child(even) {
  background-color: #ddd;
}

#board-rows div:nth-child(odd) {
  background-color: #ccc;
}

.board-row:hover,
.board-row:active {
  background-color: #eee!important;
  /* ^ Don't use `!important`. Fix this. */
}

.col1 {
  width: 40%;
}

.col2,
.col3 {
  width: 10%;
  text-align: center;
}

.col4,
.col5 {
  width: 20%;
}

.col5 {
  border-right-width: 0px!important;
  /* ^ Don't use `!important`. Fix this. */
}

.lh {
  line-height: 30px;
}



/* mobile */
@media (max-width: 599px) {
  #board {
    padding: 4px;
  }

  .col1 {
    width: 100%;
    border-right: 0!important;
  }

  .col2,
  .col3,
  .col4,
  .col5 {
    display: none;
    visibility: hidden;
    width: 0;
    margin: 0;
    border: 0!important;
    padding: 0!important;
  }
}

/* tablet (portrait) */
@media (min-width: 600px) {

}

/* tablet (landscape)*/
@media (min-width: 900px) {

}

/* desktop */
@media (min-width: 1200px) {

}
</style>