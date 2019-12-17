<html>

<head>
  <meta charset="UTF-8">
  <title>bonk bonk</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="styles/style.css">
</head>

<body>
  <div class="jumbotron jumbotron-fluid bg-info text-white">
    <div class="container">
      <a href="logout.php" class="float-right text-white">Log out</a>
    </div>
    <div class="ml-5">
      <h1>Heartbeat</h1>
    </div>
  </div>

  <div class="ml-5">
    <p id="paverage"></p>
  </div>
  <div class="w-25 ml-5">
    <div>
      <canvas id="myChart" width="400" height="400"></canvas>

      </table>

    </div>
    <div class="hide" id="tablediv">
      <table class="table table-bordered">
        <thead>
          <tr class="table-danger">
            <th scope="col">#</th>
            <th scope="col">beats</th>
          </tr>
        </thead>
        <tbody id="beatstable">

        </tbody>
    </div>
  </div>
  <script src="scripts/script.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>
