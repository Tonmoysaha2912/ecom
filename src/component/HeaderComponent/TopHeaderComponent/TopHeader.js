export default function TopHeader() {
    return(
		<div class="top-content">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-6">
						<div class="social-links">
							<ul>
								<li>
									<a href="home"><i class="icon icon-facebook"></i></a>
								</li>
								<li>
									<a href="home"><i class="icon icon-twitter"></i></a>
								</li>
								<li>
									<a href="home"><i class="icon icon-youtube-play"></i></a>
								</li>
								<li>
									<a href="home"><i class="icon icon-behance-square"></i></a>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-md-6">
						<div class="right-element">
							<a href="home" class="user-account for-buy"><i
									class="icon icon-user"></i><span>Account</span></a>
							<a href="home" class="cart for-buy"><i class="icon icon-clipboard"></i><span>Cart:(0
									$)</span></a>

							<div class="action-menu">

								<div class="search-bar">
									<a href="home" class="search-button search-toggle" data-selector="#header-wrap">
										<i class="icon icon-search"></i>
									</a>
									<form role="search" method="get" class="search-box">
										<input class="search-field text search-input" placeholder="Search"
											type="search" />
									</form>
								</div>
							</div>

						</div>
					</div>

				</div>
			</div>
		</div>
    );

}