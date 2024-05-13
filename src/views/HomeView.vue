<template>
  <div class="container">
    <!-- Profile Box -->
    <div class="profile-box">
      <div class="cover-photo">
        <img src="@/assets/images/default.jpg" class="profile">
      </div>
      <div class="profile-name">Anatolijs</div>
      <p class="about">User Interface Designer and<br>front-end developer</p>
      <br>
      <p>Followers: 500</p>
      <p>Following: 1050</p>
      <br>
      <p>Gallery</p>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

      <div class="social-icons">
        <font-awesome-icon :icon="['fab', 'facebook']" class="icon" />
        <font-awesome-icon :icon="['fab', 'twitter']" class="icon" />
        <font-awesome-icon :icon="['fab', 'instagram']" class="icon" />
        <font-awesome-icon :icon="['fab', 'tiktok']" class="icon" />
      </div>
    </div>

    <!-- Status Box (Your Posts) -->
    <div class="status-box">
      <h2>Your Posts</h2>
      <!-- Your Posts Content -->
      <div class="post">
        <div class="name">Anatolijs</div>
        <div class="message"><input  class="inputt" placeholder="write a message"></div>
      </div>
      <!-- Add more of your posts as needed -->
      <button>New Post</button>
<div class="line"></div>
<h2>Old posts</h2>
<div class="oldpost">

 <div class="post">
        <div class="name">Anatolijs</div>
        <div class="groups">Group C, Group D</div>
        <div class="message">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

      </div>
      </div>
       
    </div>

    <!-- Post Box -->
    <div class="post-box">
      <h2>Posts</h2>
      <!-- User posts -->
      <div class="post">
        <div class="name">John Doe</div>
        <div class="groups">Group A, Group B</div>
        <div class="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
      <div class="post">
        <div class="name">Jane Smith</div>
        <div class="groups">Group C, Group D</div>
        <div class="message">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      <!-- Add more post boxes as needed -->
    </div>

    <!-- Group Box -->
<div class="group-box">
  <h2>Groups</h2>
  <!-- Group invites -->
  <h3>Group Invites</h3>
  <div class="search-create">
    <input type="text" placeholder="Search Groups" class="search-input">
    <button class="search-button">Search</button>
    
  </div>
  <button class="create-button">+Create New Group</button>
  <!-- Group list -->
  <div class="group-list">
    <div class="group">
      <div class="group-name">Group 1</div>
      <div class="group-actions">
        <button class="view-group">View</button>
        <button class="leave-group">Leave</button>
      </div>
    </div>
    <div class="group">
      <div class="group-name">Group 2</div>
      <div class="group-actions">
        <button class="view-group">View</button>
        <button class="leave-group">Leave</button>
      </div>
    </div>
    <!-- Add more groups as needed -->
  </div>
</div>


    <!-- Other Posts Box -->
    <div class="other-posts-box">
      <!-- Other people's posts -->
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto; /* Adjust the row sizes */
  grid-gap: 20px;
  padding: 20px;
}

.profile-box {
  grid-column: 1;
  grid-row: 1 / span 3; /* Spanning the entire height */
}

.status-box {
  grid-column: 2;
}

.post-box {
  grid-column: 3;
}

.group-box {
  grid-column: span 2; /* Spanning across all columns */
  grid-row: 3;
}
.line{
 margin: 1vh;
content:'';
width:100%;
height:10px;
position:relative;
bottom:0;
background:#337AB7;
border-radius:5px;

}
/* Add these styles at the bottom of your existing CSS */

/* Add these styles at the bottom of your existing CSS */

/* Group Box */
.group-box {
  position: relative;
}

/* Search bar and button */
.search-create {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.group-box input[type="text"].search-input {
  width: calc(100% - 220px); /* Adjust width based on button and create button width */
  padding: 5px;
}

.group-box button.search-button,
.group-box button.create-button {
  padding: 5px 10px;
  background-color: #03bfbc;
  border: none;
  color: white;
  border-radius: 3px;
  cursor: pointer;
}

/* Group actions buttons */
.group-actions {
  display: flex;
}

.group-actions button {
  margin-right: 5px; /* Adjust margin between buttons */
}


.other-posts-box {
  grid-column: span 1;
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;
}

.profile-box,
.status-box,
.post-box,
.group-box {
  background: #231e39;
  color: #b3b8cd;
  border-radius: 5px;
  box-shadow: 0 10px 20px -10px rgba(0,0,0,.75);
  padding: 20px;
}
.inputt {
  background-color: transparent;
  border: none;
  outline: none; /* Remove outline when focused */
  color: #ccc;
  font-size: 16px;
  padding: 8px 12px; /* Adjust padding as needed */
  border-radius: 5px; /* Add border-radius for a smoother appearance */
}

.cover-photo {
  background: url(https://images.unsplash.com/photo-1540228232483-1b64a7024923?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80);
  height: 160px;
  border-radius: 5px 5px 0 0;
}

.profile {
  height: 120px;
  width: 120px;
  border-radius: 50%;
  border: 1px solid #1f1a32;
  padding: 7px;
  background: #292343;
  margin: 0 auto;
}

.profile-name {
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
}

.about {
  margin-top: 20px;
  line-height: 21px;
}

.social-icons {
  margin-top: 20px;
}

.icon {
  font-size: 24px;
  margin: 0 5px;
  color: #b3b8cd;
}

.icon:hover {
  color: #03bfbc;
}

.status-box h2 {
  margin-bottom: 10px;
}

.status-box input[type="text"],
.status-box textarea,
.group-box input[type="text"] {
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
}
.group-box  {
  width: 100%;
  
}
.status-box button,
.post-box button,
.group-box button {
  padding: 5px 10px;
  background-color: #03bfbc;
  border: none;
  color: white;
  border-radius: 3px;
  cursor: pointer;
}

.post {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

.post .name {
  font-weight: bold;
}

.post .groups {
  color: #666;
  margin-bottom: 5px;
}

.group-box {
  position: relative;
}
p{
  font-size: 20px;
}
</style>
