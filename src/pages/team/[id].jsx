import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";

import { getAllTeamIds, getTeamData } from "@library/team";
import { getFeaturedProjectsData } from "@library/projects";
import { getFeaturedServicesData } from "@library/services";

const TeamDetail = ( { postData, projects, services } ) => {
  return (
    <Layouts>
      <PageBanner pageTitle={postData.name} pageDesc={"Meet our creativity company family."} />

      	{/* Onovo Team Detail */}
		<section className="onovo-section gap-top-140 gap-bottom-140">
			<div className="container">

				{/* Team Card */}
				<div className="onovo-team-detail">
					<div className="row  ">
						<div className="image-container-team-details">
							<img loading="lazy" src={postData.image}  className="team-detail-img " alt={postData.name} />
						</div>
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">
							<h2>
								<span data-splitting data-onovo-scroll>{postData.name}</span>
							</h2>
							<h5>
								<span data-splitting data-onovo-scroll>{postData.role}</span>
							</h5>
							{typeof postData.info != "undefined" &&
							<div className="onovo-team-info">
								<ul>
									{postData.info.map((item, key) => (
									<li key={`info-item-${key}`}>
									
										
											<div data-splitting data-onovo-scroll>
												<p>{item.value}</p>
											</div>
							
									</li>
									))}
								</ul>
							</div>
							}
							
						</div>
					</div>
				</div>
		
			


			</div>
		</section>
	

    </Layouts>
  );
};
export default TeamDetail;

export async function getStaticPaths() {
    const paths = getAllTeamIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getTeamData(params.id)
    const projects = await getFeaturedProjectsData(postData.projects)
    const services = await getFeaturedServicesData(postData.services)
    
    return {
      props: {
        postData,
        projects,
        services
      }
    }
}