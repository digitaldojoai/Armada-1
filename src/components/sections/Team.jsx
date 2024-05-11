import Data from "@data/sections/team.json";
import Link from "next/link";

const TeamSection = ( { team } ) => {
    return (
        <>
            {/* Onovo Team */}
			<section className="onovo-section  gap-bottom-140 " id="teams">
				<div className="container">

					{/* Heading */}
					<div className="onovo-heading align-center gap-bottom-40">
						<div className="onovo-subtitle-1">
							<span className="fs-5">{Data.subtitle}</span>
						</div>
						<h2 className="onovo-title-2">
							<span dangerouslySetInnerHTML={{__html: Data.title}} />
						</h2>
					</div>

					{/* Team items */}
					<div className=" row gap-3 align-items-center align-self-center d-flex  justify-content-between">

                        {team.slice(0, Data.numOfItems).map((item, key) => (
						<div key={`team-item-${key}`} className=" d-flex align-items-center gap-5 col-xs-12 col-sm-12 col-md-6 col-lg-3">
							<div className="onovo-team w-100" data-onovo-overlay data-onovo-scroll>
							<Link href={`/team/${item.id}`} >
								<div className="onovo-team-item onovo-hover-3">
									<div className="desc">
										<h5 className="title">
											<Link href={`/team/${item.id}`} className="onovo-lnk">
												<span data-splitting data-onovo-scroll>{item.name}</span>
											</Link>
										</h5>
										<div className="onovo-subtitle-1">
											<span data-splitting data-onovo-scroll>{item.role}</span>
										</div>
										<div className="onovo-social-1">
										</div>
									</div>
									<div className="image ">
										<Link href={`/team/${item.id}`}>
											<img decoding="async"  src={item.image} width="350" height="730" alt={item.name} />
										</Link>
									</div>
									<div className="num onovo-text-white">
										<span>{item.first_letter}</span>
									</div>
								</div>
								</Link>
							</div>
						</div>
                        ))}

					</div>
					
				</div>
			</section>
        </>
    );
};

export default TeamSection;