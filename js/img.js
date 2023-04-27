document.getElementById('imageInput').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('preview').src = e.target.result;
        document.getElementById('preview').style.display = 'block';
        document.getElementById('text_imagen').style.display = 'none';
      }
      reader.readAsDataURL(file);
    }
  });