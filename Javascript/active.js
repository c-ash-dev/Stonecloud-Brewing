<script>
  function initMap() {
    var uluru = {lat: 35.4688, lng: -97.5290};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
</script>
