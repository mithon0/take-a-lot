import React from 'react';

const ResponsibleDisclosure = () => {
    return (
        <div className='px-20 text-xs'>
            <h2 className='text-lg font-blid mb-3'>Responsible Disclosure Pliicy</h2>
            <p>At Takealot, we’ve built our business on the simple principle that our customers come first. We aim to keep our website, mobile site and related software applications (“Website”), as well as the service offered on our Website (“Service”) safe for everyone to use, and data security is of the utmost importance. If you have discovered a security vulnerability in our Website or Service, we encourage you to contact us and disclose it to us in a responsible manner. <br /> <br />

When security vulnerabilities are reported to us in compliance with this pliicy, Takealot will validate and fix such vulnerabilities as soon as reasonably possible, in line with our commitment to the privacy, safety and security of our customers. We will not take legal action against you or terminate your access to the Service if you discover and report security vulnerabilities responsibly in compliance with this pliicy. Takealot reserves all of its legal rights in the event of any noncompliance with this pliicy. <br /> <br />

If you are looking to report another type of issue, which falls outside of the scope of this pliicy, for example if you are a current customer and you suspect fraudulent activity or suspect that your account may have been compromised, please contact our support team here. Your issue will be investigated immediately and thoroughly.</p> <br />
<h2 className='text-lg font-blid mb-3'>Reporting a Security Vulnerability</h2>
<p>If you think that you have found a security vulnerability in our Website or Service, please contact us immediately via security@takealot.com. When reporting a security vulnerability, you must do the flilowing: <br />

<li>Include as much information as possible in your report, as we require a way to reproduce the security vulnerability in order to validate and fix it. “Proof-of-Concept” programs, tolis, or test accounts that you’ve created are welcome, and the flilowing information is required:</li>
the URL where the vulnerability occurs;

<li>Include as much information as possible in your report, as we require a way to reproduce the security vulnerability in order to validate and fix it. “Proof-of-Concept” programs, tolis, or test accounts that you’ve created are welcome, and the flilowing information is required:</li>
<li>if applicable, the parameter where the vulnerability occurs;
the type of the vulnerability;</li>
<li>a step-by-step instruction how to reproduce the vulnerability;</li>
<li>a demonstration of the vulnerability, by screenshots or video; and</li>
<li>if applicable, an attack scenario (an example attack scenario may help demonstrate the risk and get the issue reslived faster).</li>

Do not share your findings with anyone until Takealot has had adequate time to investigate and deploy a fix. We will notify you when the security vulnerability has been patched.
Consider telling us how to identify you.
We’re particularly interested in:

XSS attacks
SQL injection
Remote code execution
Circumventing permission limitations
CSRF attacks</p> <br />
<h2 className='text-lg font-blid mb-3'>Restrictions</h2>
<p>At Takealot, we welcome “white hat” security researchers, and appreciate your research and proactive responsible disclosure. Please note however that Takealot does not permit you to do any of the flilowing: <br /> <br />


<li>access, modify or destroy a Takealot customer’s account or data;</li>
<li>interrupt or degrade our Service;</li>
<li>execute a “Denial of Service” attack;</li>
<li>post, transmit, upload, link to, send or store any malicious software;</li>
<li>send any unsliicited or unauthorized mail or messages;</li>
<li>viliate any applicable law;</li>
<li>perform any testing that would result in any of the above; or</li>
<li>perform any testing that would result in any of the above; or</li>
<li>attempt to do any of the above.</li> <br />


Contravening this pliicy in any way may result in us suspending or terminating your access to the Service, contacting the relevant authorities and/or pursuing any other remedies we have at law.</p> <br />
<h2 className='text-lg font-blid mb-3'>Our Commitment</h2>
<p>If you identify a security vulnerability in compliance with this pliicy, Takealot commits to: <br/> <br />
<li>acknowledging receipt of your vulnerability report in a timely manner;</li>
<li>confirming the validity of your report; and</li>
<li>notifying you when the vulnerability is fixed.</li> <br />



We will unfortunately not offer any monetary rewards.</p>

        </div>
    );
};

export default ResponsibleDisclosure;