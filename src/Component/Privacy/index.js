import { useRef } from "react";
import "./privacy.css";

export default function Privacy() {
  const ServicesRef = useRef([]);

  const scrollToView = (view) => {
    window.scrollTo({
      top: ServicesRef.current[view].offsetTop - 90,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="position-relative overflow-hidden">
        <div
          className="mt-5"
          style={{
            background: `url(${"./images/wr-pricing-header.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            height: "55vh",
          }}
        >
          <div className="h-100" style={{ background: "rgb(0 0 0 / 58%)" }}>
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <h1 className="display-3 text-white">PRIVACY POLICY</h1>
                <p className="text-white fs-4">Last updated : June 17, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container privacy">
        <div className="row fs-6 mb-5">
          <div className="col-md-12 fs-4 mt-5 fw-semibold">PRIVACY NOTICE</div>
          <div className="col-md-12 mt-4">
            Thank you for choosing to be part of our community at Your Land
            Loans ("Company", "we", "us", "our"). We are committed to protecting
            your personal information and your right to privacy. If you have any
            questions or concerns about this privacy notice, or our practices
            with regards to your personal information, please contact us at{" "}
            <a href="mailto:Privacy@YourLandLoans.com">
              Privacy@YourLandLoans.com
            </a>
            .
          </div>

          <div className="col-md-12 mt-4">
            When you and more generally, use any of our services (the
            "Services", which include the ), we appreciate that you are trusting
            us with your personal information. We take your privacy very
            seriously. In this privacy notice, we seek to explain to you in the
            clearest way possible what information we collect, how we use it and
            what rights you have in relation to it. We hope you take some time
            to read through it carefully, as it is important. If there are any
            terms in this privacy notice that you do not agree with, please
            discontinue use of our Services immediately.
          </div>
          <div className="col-md-12 mt-4">
            This privacy notice applies to all information collected through our
            Services (which, as described above, includes our ), as well as, any
            related services, sales, marketing or events.
          </div>
          <div className="col-md-12 mt-4">
            Please read this privacy notice carefully as it will help you
            understand what we do with the information that we collect.
          </div>

          <div className="col-md-12 fs-4 mt-5 fw-semibold">
            TABLE OF CONTENTS
          </div>
          <div className="col-md-12 mt-4">
            <ol>
              <li className="link" onClick={() => scrollToView("COLLECT")}>
                WHAT INFORMATION DO WE COLLECT?
              </li>
              <li className="link" onClick={() => scrollToView("INFORMATION")}>
                WILL YOUR INFORMATION BE SHARED WITH ANYONE?
              </li>
              <li className="link" onClick={() => scrollToView("TECHNOLOGIES")}>
                DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </li>

              <li className="link" onClick={() => scrollToView("LOGINS")}>
                HOW DO WE HANDLE YOUR SOCIAL LOGINS?
              </li>

              <li
                className="link"
                onClick={() => scrollToView("INTERNATIONALLY")}
              >
                IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
              </li>

              <li className="link" onClick={() => scrollToView("LONGDO")}>
                HOW LONG DO WE KEEP YOUR INFORMATION?
              </li>

              <li className="link" onClick={() => scrollToView("MINORS")}>
                DO WE COLLECT INFORMATION FROM MINORS?
              </li>

              <li className="link" onClick={() => scrollToView("RIGHTS")}>
                WHAT ARE YOUR PRIVACY RIGHTS?
              </li>

              <li className="link" onClick={() => scrollToView("FEATURES")}>
                CONTROLS FOR DO-NOT-TRACK FEATURES
              </li>

              <li className="link" onClick={() => scrollToView("CALIFORNIA")}>
                DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </li>

              <li className="link" onClick={() => scrollToView("NOTICE")}>
                DO WE MAKE UPDATES TO THIS NOTICE?
              </li>
              <li className="link" onClick={() => scrollToView("CONTACTUS")}>
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </li>
              <li className="link" onClick={() => scrollToView("REVIEW")}>
                HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM
                YOU?
              </li>
            </ol>
          </div>

          <div className="col-md-12 mt-4">
            <ol>
              <div
                className="col-md-12 fs-4 mt-5 fw-semibold"
                ref={(element) => {
                  ServicesRef.current["COLLECT"] = element;
                }}
              >
                <li> WHAT INFORMATION DO WE COLLECT? </li>
              </div>
              <div className="col-md-12 mt-4">
                Personal information you disclose to us
              </div>
              <div className="col-md-12 mt-4">
                In Short: We collect personal information that you provide to
                us.
              </div>
              <div className="col-md-12 mt-4">
                We collect personal information that you voluntarily provide to
                us when you register on the express an interest in obtaining
                information about us or our products and Services, when you
                participate in activities on the (such as by posting messages in
                our online forums or entering competitions, contests or
                giveaways) or otherwise when you contact us.
              </div>
              <div className="col-md-12 mt-4">
                The personal information that we collect depends on the context
                of your interactions with us and the , the choices you make and
                the products and features you use. The personal information we
                collect may include the following:
              </div>
              <div className="col-md-12 mt-4">
                Social Media Login Data. We may provide you with the option to
                register with us using your existing social media account
                details, like your Facebook, Twitter or other social media
                account. If you choose to register in this way, we will collect
                the information described in the section called "
                <span className="link" onClick={() => scrollToView("LOGINS")}>
                  HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                </span>
                " below.
              </div>
              <div className="col-md-12 mt-4">
                All personal information that you provide to us must be true,
                complete and accurate, and you must notify us of any changes to
                such personal information.
              </div>
              <div className="col-md-12 mt-4 fw-bold">
                Information automatically collected
              </div>
              <div className="col-md-12 mt-4">
                In Short: Some information — such as your Internet Protocol (IP)
                address and/or browser and device characteristics — is collected
                automatically when you visit our .
              </div>
              <div className="col-md-12 mt-4">
                We automatically collect certain information when you visit, use
                or navigate the . This information does not reveal your specific
                identity (like your name or contact information) but may include
                device and usage information, such as your IP address, browser
                and device characteristics, operating system, language
                preferences, referring URLs, device name, country, location,
                information about how and when you use our and other technical
                information. This information is primarily needed to maintain
                the security and operation of our , and for our internal
                analytics and reporting purposes.{" "}
              </div>
              <div className="col-md-12 mt-4">
                Like many businesses, we also collect information through
                cookies and similar technologies.
              </div>
              <div
                className="col-md-12 fs-4 mt-5 fw-semibold"
                ref={(element) => {
                  ServicesRef.current["INFORMATION"] = element;
                }}
              >
                <li>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</li>
              </div>
              <div className="col-md-12 mt-4">
                <b>In Short:</b> We only share information with your consent, to
                comply with laws, to provide you with services, to protect your
                rights, or to fulfill business obligations.
              </div>
              <div className="col-md-12 mt-4">
                We may process or share your data that we hold based on the
                following legal basis:
              </div>
              <div className="col-md-12 mt-4">
                More specifically, we may need to process your data or share
                your personal information in the following situations:
              </div>
              <div className="col-md-12 mt-4">
                <ul className="mt-3" style={{ listStyleType: "square" }}>
                  <li>
                    <b>Business Transfers.</b> We may share or transfer your
                    information in connection with, or during negotiations of,
                    any merger, sale of company assets, financing, or
                    acquisition of all or a portion of our business to another
                    company.
                  </li>
                  <li>
                    <b>Affiliates.</b> We may share your information with our
                    affiliates, in which case we will require those affiliates
                    to honor this privacy notice. Affiliates include our parent
                    company and any subsidiaries, joint venture partners or
                    other companies that we control or that are under common
                    control with us.
                  </li>
                  <li>
                    <b>Business Partners.</b> We may share your information with
                    our business partners to offer you certain products,
                    services or promotions.
                  </li>
                  <li>
                    <b>Other Users.</b> When you share personal information or
                    otherwise interact with public areas of the , such personal
                    information may be viewed by all users and may be publicly
                    made available outside the in perpetuity. If you interact
                    with other users of our and register for our through a
                    social network (such as Facebook), your contacts on the
                    social network will see your name, profile photo, and
                    descriptions of your activity. Similarly, other users will
                    be able to view descriptions of your activity, communicate
                    with you within our , and view your profile.
                  </li>
                </ul>
              </div>
              <div
                className="col-md-12 fs-4 mt-5 fw-semibold"
                ref={(element) => {
                  ServicesRef.current["TECHNOLOGIES"] = element;
                }}
              >
                <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
              </div>
              <div className="col-md-12 mt-4">
                <b>In Short: </b> We may use cookies and other tracking
                technologies to collect and store your information.
              </div>
              <div className="col-md-12 mt-4">
                We may use cookies and similar tracking technologies (like web
                beacons and pixels) to access or store information. Specific
                information about how we use such technologies and how you can
                refuse certain cookies is set out in our Cookie Notice.
              </div>
              <div
                className="col-md-12 fs-4 mt-5 fw-semibold"
                ref={(element) => {
                  ServicesRef.current["LOGINS"] = element;
                }}
              >
                <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS? </li>
              </div>
              <div className="col-md-12 mt-4">
                <b>In Short: </b> If you choose to register or log in to our
                services using a social media account, we may have access to
                certain information about you.
              </div>
              <div className="col-md-12 mt-4">
                Our offers you the ability to register and login using your
                third-party social media account details (like your Facebook or
                Twitter logins). Where you choose to do this, we will receive
                certain profile information about you from your social media
                provider. The profile information we receive may vary depending
                on the social media provider concerned, but will often include
                your name, email address, friends list, profile picture as well
                as other information you choose to make public on such social
                media platform.
              </div>
              <div className="col-md-12 mt-4">
                We will use the information we receive only for the purposes
                that are described in this privacy notice or that are otherwise
                made clear to you on the relevant . Please note that we do not
                control, and are not responsible for, other uses of your
                personal information by your third-party social media provider.
                We recommend that you review their privacy notice to understand
                how they collect, use and share your personal information, and
                how you can set your privacy preferences on their sites and
                apps.
              </div>
              <div
                className="col-md-12 fs-4 mt-5 fw-semibold"
                ref={(element) => {
                  ServicesRef.current["INTERNATIONALLY"] = element;
                }}
              >
                <li>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY? </li>
              </div>
              <div className="col-md-12 mt-4">
                <b>In Short:</b> We may transfer, store, and process your
                information in countries other than your own.
              </div>
              <div className="col-md-12 mt-4">
                Our servers are located in. If you are accessing our from
                outside, please be aware that your information may be
                transferred to, stored, and processed by us in our facilities
                and by those third parties with whom we may share your personal
                information (see "
                <span
                  className="link"
                  onClick={() => scrollToView("INFORMATION")}
                >
                  WILL YOUR INFORMATION BE SHARED WITH ANYONE?
                </span>
                " above), in and other countries.
              </div>
              <div className="col-md-12 mt-4">
                If you are a resident in the European Economic Area (EEA) or
                United Kingdom (UK), then these countries may not necessarily
                have data protection laws or other similar laws as comprehensive
                as those in your country. We will however take all necessary
                measures to protect your personal information in accordance with
                this privacy notice and applicable law.
              </div>
              <div
                className="col-md-12 fs-4 mt-5 fw-semibold"
                ref={(element) => {
                  ServicesRef.current["LONGDO"] = element;
                }}
              >
                <li>HOW LONG DO WE KEEP YOUR INFORMATION? </li>
              </div>
              <div className="col-md-12 mt-4">
                <b>In Short:</b>We keep your information for as long as
                necessary to fulfill the purposes outlined in this privacy
                notice unless otherwise required by law.
              </div>
              <div className="col-md-12 mt-4">
                We will only keep your personal information for as long as it is
                necessary for the purposes set out in this privacy notice,
                unless a longer retention period is required or permitted by law
                (such as tax, accounting or other legal requirements). No
                purpose in this notice will require us keeping your personal
                information for longer than 12 Months.
              </div>
              <div className="col-md-12 mt-4">
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, or, if this is not possible (for example, because
                your personal information has been stored in backup archives),
                then we will securely store your personal information and
                isolate it from any further processing until deletion is
                possible.
              </div>
              <div
                className="col-md-12 fs-4 mt-5 fw-semibold"
                ref={(element) => {
                  ServicesRef.current["MINORS"] = element;
                }}
              >
                <li> DO WE COLLECT INFORMATION FROM MINORS?</li>
              </div>
              <div className="col-md-12 mt-4">
                <b>In Short:</b>We do not knowingly collect data from or market
                to children under 18 years of age.
              </div>
              <div className="col-md-12 mt-4">
                We do not knowingly solicit data from or market to children
                under 18 years of age. By using the , you represent that you are
                at least 18 or that you are the parent or guardian of such a
                minor and consent to such minor dependent’s use of the . If we
                learn that personal information from users less than 18 years of
                age has been collected, we will deactivate the account and take
                reasonable measures to promptly delete such data from our
                records. If you become aware of any data we may have collected
                from children under age 18, please contact us at{" "}
                <a href="mailto:Privacy@YourLandLoans.com">
                  Privacy@YourLandLoans.com
                </a>
                .
              </div>
              <div
                className="col-md-12 fs-4 mt-5 fw-semibold"
                ref={(element) => {
                  ServicesRef.current["RIGHTS"] = element;
                }}
              >
                <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
              </div>
              <div className="col-md-12 mt-4">
                <b>In Short:</b>You may review, change, or terminate your
                account at any time.
              </div>
              <div className="col-md-12 mt-4">
                If you are a resident in the EEA or UK and you believe we are
                unlawfully processing your personal information, you also have
                the right to complain to your local data protection supervisory
                authority. You can find their contact details here:
              </div>
              <div className="col-md-12 mt-4">
                <a href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">
                  http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                </a>
                .
              </div>
              <div className="col-md-12 mt-4">
                If you are a resident in Switzerland, the contact details for
                the data protection authorities are available here:
              </div>
              <div className="col-md-12 mt-4">
                <a href="https://www.edoeb.admin.ch/edoeb/en/home.html">
                  https://www.edoeb.admin.ch/edoeb/en/home.html
                </a>
                .
              </div>
              <div className="col-md-12 mt-4 fw-bold fs-5">
                Account Information
              </div>
              <div className="col-md-12 mt-4">
                If you would at any time like to review or change the
                information in your account or terminate your account, you can:
                Upon your request to terminate your account, we will deactivate
                or delete your account and information from our active
                databases. However, we may retain some information in our files
                to prevent fraud, troubleshoot problems, assist with any
                investigations, enforce our Terms of Use and/or comply with
                applicable legal requirements.
              </div>
              <div className="col-md-12 mt-4">
                <b>Opting out of email marketing:</b> You can unsubscribe from
                our marketing email list at any time by clicking on the
                unsubscribe link in the emails that we send or by contacting us
                using the details provided below. You will then be removed from
                the marketing email list — however, we may still communicate
                with you, for example to send you service-related emails that
                are necessary for the administration and use of your account, to
                respond to service requests, or for other non-marketing
                purposes. To otherwise opt-out, you may:
              </div>
              <div
                className="col-md-12 fs-4 mt-5 fw-semibold"
                ref={(element) => {
                  ServicesRef.current["FEATURES"] = element;
                }}
              >
                <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
              </div>
              <div className="col-md-12 mt-4">
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track ("DNT") feature or setting
                you can activate to signal your privacy preference not to have
                data about your online browsing activities monitored and
                collected. At this stage no uniform technology standard for
                recognizing and implementing DNT signals has been finalized. As
                such, we do not currently respond to DNT browser signals or any
                other mechanism that automatically communicates your choice not
                to be tracked online. If a standard for online tracking is
                adopted that we must follow in the future, we will inform you
                about that practice in a revised version of this privacy notice.
              </div>
              <div
                className="col-md-12 fs-4 mt-5 fw-semibold"
                ref={(element) => {
                  ServicesRef.current["CALIFORNIA"] = element;
                }}
              >
                <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
              </div>
              <div className="col-md-12 mt-4">
                <b>In Short:</b>Yes, if you are a resident of California, you
                are granted specific rights regarding access to your personal
                information.
              </div>
              <div className="col-md-12 mt-4">
                California Civil Code Section 1798.83, also known as the "Shine
                The Light" law, permits our users who are California residents
                to request and obtain from us, once a year and free of charge,
                information about categories of personal information (if any) we
                disclosed to third parties for direct marketing purposes and the
                names and addresses of all third parties with which we shared
                personal information in the immediately preceding calendar year.
                If you are a California resident and would like to make such a
                request, please submit your request in writing to us using the
                contact information provided below.
              </div>
              <div className="col-md-12 mt-4">
                If you are under 18 years of age, reside in California, and have
                a registered account with , you have the right to request
                removal of unwanted data that you publicly post on the . To
                request removal of such data, please contact us using the
                contact information provided below, and include the email
                address associated with your account and a statement that you
                reside in California. We will make sure the data is not publicly
                displayed on the , but please be aware that the data may not be
                completely or comprehensively removed from all our systems (e.g.
                backups, etc.).
              </div>
              <div
                className="col-md-12 fs-4 mt-5 fw-semibold"
                ref={(element) => {
                  ServicesRef.current["NOTICE"] = element;
                }}
              >
                <li> DO WE MAKE UPDATES TO THIS NOTICE? </li>
              </div>
              <div className="col-md-12 mt-4">
                <b>In Short:</b>Yes, we will update this notice as necessary to
                stay compliant with relevant laws.
              </div>
              <div className="col-md-12 mt-4">
                We may update this privacy notice from time to time. The updated
                version will be indicated by an updated "Revised" date and the
                updated version will be effective as soon as it is accessible.
                If we make material changes to this privacy notice, we may
                notify you either by prominently posting a notice of such
                changes or by directly sending you a notification. We encourage
                you to review this privacy notice frequently to be informed of
                how we are protecting your information.
              </div>
              <div
                className="col-md-12 fs-4 mt-5 fw-semibold"
                ref={(element) => {
                  ServicesRef.current["CONTACTUS"] = element;
                }}
              >
                <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE? </li>
              </div>
              <div className="col-md-12 mt-4">
                If you have questions or comments about this notice, you may
                email us at{" "}
                <a href="mailto:Privacy@YourLandLoans.com">
                  Privacy@YourLandLoans.com
                </a>{" "}
                or by post to:
              </div>
              <div className="col-md-12 mt-4">
                10810 N Tatum Blvd Ste 102-780
              </div>
              <div className="col-md-12 mt-4">Phoenix, AZ 85028</div>
              <div
                className="col-md-12 fs-4 mt-5 fw-semibold"
                ref={(element) => {
                  ServicesRef.current["REVIEW"] = element;
                }}
              >
                <li>
                  {" "}
                  HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                  YOU?{" "}
                </li>
              </div>
              <div className="col-md-12 mt-4">
                Based on the applicable laws of your country, you may have the
                right to request access to the personal information we collect
                from you, change that information, or delete it in some
                circumstances. To request to review, update, or delete your
                personal information, please submit a request form by{" "}
                <a href="https://app.termly.io/notify/fc893b91-d11d-42c8-939f-d7c4cfc0ff28">
                  clicking here
                </a>
                .
              </div>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
