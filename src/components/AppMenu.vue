<script>
</script>
<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col">
				<nav class="navbar navbar-expand-lg navbar-light menu">
					<div class="col-2">
						<router-link to="/calendario" class="nav-item nav-link d-lg-block d-none">Reservar</router-link>
					</div>

					<div class="col-2">
						<router-link to="/menus" class="nav-item nav-link d-lg-block d-none">Menu</router-link>
					</div>

					<div class="col-4">
						<router-link to="/"><img src="/public/img/logo.png" alt="Image"></router-link>
					</div>

					<div class="col-2">
						<router-link to="/listAlergenos" class="nav-item nav-link d-lg-block d-none">Alérgenos</router-link>
					</div>

					<div class="col-2">
						<router-link to="/aboutUs" class="nav-item nav-link d-lg-block d-none">Sobre
							nosotros</router-link>
					</div>

					<button class="navbar-toggler botMen" type="button" data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						aria-expanded="false" aria-label="Toggle navigation">
						<span class="bi bi-caret-down-fill"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<div class="d-lg-none d-md-block">
							<router-link class="nav-item nav-link" to="/calendario">Reservar</router-link>
							<router-link class="nav-item nav-link" to="/menus">Menu</router-link>
							<router-link class="nav-item nav-link" to="/listAlergenos">Alérgenos</router-link>
							<router-link class="nav-item nav-link" to="/aboutUs">Sobre nosotros</router-link>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</div>

</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");
@import url("https://fonts.googleapis.com/icon?family=Pacifico");
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css");

.menu {
	background-color: white;
	text-align: center;
}

.menu a {
	color: #93BE0F;
	font-size: 25px;
	font-family: 'pacifico';
}

.botMen {
	position: absolute;
}

.botMen[aria-expanded="true"] {
	transform: rotate(180deg);
}

.navbar-toggler {
	color: black !important;
}

div img {
	width: 250px;
	height: 100px;
}
</style>