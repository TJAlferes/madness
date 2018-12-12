<template>
  <div id="settings">
    <div id="avatar-settings">
      <div id="preview">
        <img src="" class="preview-frame" id="preview-image">
      </div>
      <input type="file" @change="onChange">
      <button v-if="selectedFile" @click="onUpload">Upload</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {selectedFile: null};
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    },
    onChange(event) {
      this.onFileSelected(event);
      this.previewImage(event);
    },
    onUpload() {
      console.log('ok');
      /*const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name)
      axios.post(
        `https://your-backend-api.madness.com`,
        fd
      )
      .then(res => {

      })
      .catch();*/
    },
    previewImage(event) {
      var reader = new FileReader();
      reader.onload = function(event) {
        var image = new Image();
        image.src = event.target.result;
        image.onload = function() {
          var width = this.width;
          var height = this.height;
          if ((width !== 75) || (height !== 75)) {
            alert("Image dimensions must be 75 pixels wide and 75 pixels high.");
            document.getElementById("preview-image").src = "";
            this.selectedFile = null;
          } else {
            document.getElementById("preview-image").src = event.target.result;
          }
        }
      }
      if (this.selectedFile) reader.readAsDataURL(this.selectedFile);
    }
  }
};
</script>

<style>
#preview {
  display: block;
  width: 77px;
  height: 77px;
  border: 1px solid #aaa;
  overflow: hidden;
}
</style>