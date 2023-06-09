import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Div from "../Div";
// import PageHeading from '../PageHeading';
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import { useForm } from "react-hook-form";
import { postContact } from "../../apis/contact/api";

export default function ContactPage() {
	const { register, handleSubmit } = useForm();

	pageTitle("Contact Us");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const onFinish = (values) => {
		postContact(values).then(() => {});
	};

	return (
		<>
			{/* <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      /> */}
			<Spacing lg="150" md="80" />
			<Div className="container">
				<Div className="row">
					<Div className="col-lg-6">
						<SectionHeading
							title="Contact Us"
							subtitle="Getting Touch"
						/>
						<Spacing lg="55" md="30" />
						<ContactInfoWidget withIcon />

						<Spacing lg="0" md="50" />
					</Div>
					<Div className="col-lg-6">
						<form
							action=""
							className="row"
							onSubmit={handleSubmit(onFinish)}
						>
							<Div className="col-sm-6">
								<label className="cs-primary_color">
									Full Name*
								</label>
								<input
									type="text"
									className="cs-form_field"
									{...register("full_name")}
									required
								/>
								<Spacing lg="20" md="20" />
							</Div>
							<Div className="col-sm-6">
								<label className="cs-primary_color">
									Email*
								</label>
								<input
									type="text"
									className="cs-form_field"
									{...register("email")}
									required
								/>
								<Spacing lg="20" md="20" />
							</Div>
							<Div className="col-sm-6">
								<label className="cs-primary_color">
									Project Type*
								</label>
								<input type="text" className="cs-form_field" />
								<Spacing lg="20" md="20" />
							</Div>
							<Div className="col-sm-6">
								<label className="cs-primary_color">
									Mobile*
								</label>
								<input
									type="text"
									className="cs-form_field"
									{...register("mobile")}
									required
								/>
								<Spacing lg="20" md="20" />
							</Div>
							<Div className="col-sm-12">
								<label className="cs-primary_color">
									Message*
								</label>
								<textarea
									cols="30"
									rows="7"
									className="cs-form_field"
									{...register("message")}
									required
								></textarea>
								<Spacing lg="25" md="25" />
							</Div>
							<Div className="col-sm-12">
								<button
									className="cs-btn cs-style1"
									type="submit"
								>
									<span>Send Message</span>
									<Icon icon="bi:arrow-right" />
								</button>
							</Div>
						</form>
					</Div>
				</Div>
			</Div>
			{/* <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
          allowFullScreen
          title="Google Map"
        />
      </Div> */}
			<Spacing lg="50" md="40" />
		</>
	);
}
