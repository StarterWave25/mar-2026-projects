const userData = {
    fullName: "Praveen Gubbala",
    tagline: "Fullstack Consultant Trainer",
    place: "Hyderabad, Telangana, India",
    summary: "Dedicated training professional that strives to present cutting edge technology in a manner that neophytes and craftsmen can garner information. An expert in performance based training.",
    experience: [
        { role: "Training Consultant", company: "ThoughtWorks", period: "Dec 2025 - Present" },
        { role: "Founder", company: "Edupoly", period: "Jan 2021 - Present" },
        { role: "Corporate Trainer", company: "upGrad", period: "May 2022 - Present" }
    ],
    contact: { phone: "7875381293", email: "praveengclasses@gmail.com" },
    skills: ['Leadership', 'React JS', 'Angular JS', 'JavaScript', 'Node JS'],
    languages: ['Telugu', 'English', 'Hindi']
};

const renderTemplates = () => {
    // Template 1: Modern Executive
    document.getElementById('tpl-1').innerHTML = `
        <div class="tpl-modern">
            <div class="header">
                <h2>${userData.fullName}</h2>
                <div class="tagline">${userData.tagline}</div>
                <div style="font-size: 0.8em">${userData.contact.email} | ${userData.place}</div>
            </div>
            <div class="content">
                <section>
                    <div class="section-title">Summary</div>
                    <p class="summary-text">${userData.summary}</p>
                </section>
                <section>
                    <div class="section-title">Experience</div>
                    ${userData.experience.map(exp => `
                        <div style="margin-bottom: 1em">
                            <strong>${exp.role}</strong> - ${exp.company} <br/>
                            <small>${exp.period}</small>
                        </div>
                    `).join('')}
                </section>
                <section>
                    <div class="section-title">Skills</div>
                    <p style="font-size: 1em">${userData.skills.join(', ')}</p>
                </section>
                <section>
                    <div class="section-title">Languages</div>
                    <p style="font-size: 1em">${userData.languages.join(', ')}</p>
                </section>
            </div>
        </div>
    `;

    // Template 2: Creative Minimalist
    document.getElementById('tpl-2').innerHTML = `
        <div class="tpl-creative">
            <div class="sidebar">
                <div style="font-weight: bold; margin-bottom: 0.5em;">Contact</div>
                <div style="font-size: 1em; margin-bottom: 1em;">${userData.place}<br>${userData.contact.phone}</div>
                <div style="font-weight: bold; margin-bottom: 0.5em;">Skills</div>
                ${userData.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
                <div style="font-weight: bold; margin-top: 1em;">Languages</div>
                <div style="font-size: 1em;">${userData.languages.join(', ')}</div>
            </div>
            <div class="main">
                <h2 style="color: #2c7a7b;">${userData.fullName}</h2>
                <div style="color: #4fd1c5; font-weight: 600; margin-bottom: 1em;">${userData.tagline}</div>
                <p class="summary-text" style="font-size: 1em;">${userData.summary}</p>
                <div style="margin-top: 1em; font-weight: bold; border-bottom: 1px solid #eee;">Work</div>
                ${userData.experience.map(exp => `<div style="margin-top:5px;"><strong>${exp.company}</strong><br><small>${exp.role}</small></div>`).join('')}
            </div>
        </div>
    `;

    // Template 3: Tech Professional
    document.getElementById('tpl-3').innerHTML = `
        <div class="tpl-tech">
            <h2>> ${userData.fullName}_</h2>
            <div class="accent" style="margin-bottom: 1em;">// ${userData.tagline}</div>
            <p style="font-size: 1em; margin-bottom: 1em; color: #94a3b8;">${userData.summary}</p>
            <div class="accent" style="margin-bottom: 1em;">[Experience]</div>
            ${userData.experience.map(exp => `
                <div class="experience-item">
                    <div style="color: #f1f5f9">${exp.role}</div>
                    <div style="font-size: 0.8em">${exp.company} | ${exp.period}</div>
                </div>
            `).join('')}
            <div class="accent" style="margin-top: 2em;">[Contact]</div>
            <div style="font-size: 0.8em;margin-top: 1em;">PLACE: ${userData.place}</div>
            <div style="font-size: 0.8em;margin-top: 1em;">EMAIL: ${userData.contact.email}</div>
            <div style="font-size: 0.8em;margin-top: 1em;">PHONE: ${userData.contact.phone}</div>
            <div class="accent" style="margin-top: 2em;">[Skills]</div>
            <div style="font-size: 0.8em;margin-top: 1em;">${userData.skills}</div>
            <div class="accent" style="margin-top: 2em;">[Languages]</div>
            <div style="font-size: 0.8em;margin-top: 1em;">${userData.languages}</div>
        </div>
    `;

    // Template 4: Bold Sidebar
    document.getElementById('tpl-4').innerHTML = `
        <div class="tpl-bold">
            <div class="sidebar">
                <div style="font-size: 1.2em; font-weight: bold;margin-bottom: 1em;">${userData.fullName}</div>
                <small>CONTACT</small>
                <div style="font-size: 0.8em; color: white; margin-bottom: 2em;">${userData.place}<br>${userData.contact.email}<br>${userData.contact.phone}</div>
                <small>SKILLS</small>
                <div style="font-size: 0.8em; color: white;margin-bottom: 2em;">${userData.skills.join('<br>')}</div>
                <small>LANGUAGES</small>
                <div style="font-size: 0.8em; color: white;">${userData.languages.join('<br>')}</div>
            </div>
            <div class="main">
                <div style="font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Profile</div>
                <p style="font-size: 1em; margin: 1em 0;">${userData.summary}</p>
                <div style="font-weight: bold; text-transform: uppercase; margin-top: 2em;">Experience</div>
                ${userData.experience.map(exp => `<div style="margin-top: 1em;"><strong>${exp.company}</strong><br><small>${exp.role}</small></div>`).join('')}
            </div>
        </div>
    `;

    // Template 5: Elegant Serif
    document.getElementById('tpl-5').innerHTML = `
        <div class="tpl-elegant">
            <h2>${userData.fullName}</h2>
            <div class="contact-bar">
                <span>${userData.place}</span>
                <span>${userData.contact.phone}</span>
                <span>${userData.contact.email}</span>
            </div>
            <p style="font-style: italic; text-align: center; font-size: 1em; margin-bottom: 2em;">${userData.tagline}</p>
            <div style="text-align: center; font-weight: bold; text-decoration: underline; margin-bottom: 1em;">PROFESSIONAL SUMMARY</div>
            <p style="font-size: 1em; text-align: justify; margin-bottom: 2em;">${userData.summary}</p>
            <div style="text-align: center; font-weight: bold; text-decoration: underline; margin-bottom: 1em;">EXPERIENCE</div>
            ${userData.experience.map(exp => `<div style="text-align: center; margin-bottom: 1em;"><strong>${exp.company}</strong> - ${exp.role}</div>`).join('')}
            <div style="text-align: center; font-weight: bold; text-decoration: underline; margin-bottom: 1em;">SKILLS</div>
            <p style="font-size: 1em; text-align: center; margin-bottom: 2em;">${userData.skills}</p>
            <div style="text-align: center; font-weight: bold; text-decoration: underline; margin-bottom: 1em;">LANGUAGES</div>
            <p style="font-size: 1em; text-align: center; margin-bottom: 2em;">${userData.languages}</p>
        </div>
    `;

    // Append these inside renderTemplates()

    // Template 6: Split Slate
    document.getElementById('tpl-6').innerHTML = `
    <div class="tpl-slate">
        <div class="top-bar">
            <div><h3 style="margin:0">${userData.fullName}</h3><small>${userData.tagline}</small></div>
            <div style="text-align:right; font-size:1em">${userData.place}<br>${userData.contact.email}<br>${userData.contact.phone}</div>
        </div>
        <div class="main-grid">
            <div style="grid-column: span 2;"><p class="summary-text" style="font-size:1em">${userData.summary}</p></div>
            <div style="border-right:1px solid #eee; padding-right:10px">
                <small><b>EXPERIENCE</b></small>
                ${userData.experience.map(e => `<div style="font-size:1em; margin-top:1em"><b>${e.company}</b><br>${e.role}</div>`).join('')}
            </div>
            <div>
                <small><b>SKILLS</b></small>
                <div style="font-size:1em; margin-top:1em">${userData.skills.join('<br>')}</div>
            </div>
            <div>
                <small><b>LANGUAGES</b></small>
                <div style="font-size:1em; margin-top:1em">${userData.languages.join('<br>')}</div>
            </div>
        </div>
    </div>
`;

    // Template 7: Royal Gold
    document.getElementById('tpl-7').innerHTML = `
    <div class="tpl-royal">
        <h2>${userData.fullName}</h2>
        <div class="gold-divider"></div>
        <center><small>${userData.contact.email} | ${userData.contact.phone}</small></center>
        <p style="font-size:0.8em; margin:1em 0; text-align:center">${userData.summary}</p>
        <div style="font-weight:bold; font-size:1em; color:#b7791f; margin-top:2em">EXPERIENCE</div>
        <div style="display:flex; flex-wrap:wrap; gap:0.5em; margin-top:1em">
            ${userData.experience.map(s => `<span style="border:1px solid #b7791f; padding:2px 4px; font-size:0.8em">${s.company} - ${s.role}</span>`).join('')}
        </div>
        <div style="font-weight:bold; font-size:1em; color:#b7791f; margin-top:16px">CORE EXPERTISE</div>
        <div style="display:flex; flex-wrap:wrap; gap:0.5em; margin-top:1em">
            ${userData.skills.map(s => `<span style="border:1px solid #b7791f; padding:2px 4px; font-size:0.8em">${s}</span>`).join('')}
        </div>
        <div style="font-weight:bold; font-size:1em; color:#b7791f; margin-top:16px">LANGUAGES</div>
        <div style="display:flex; flex-wrap:wrap; gap:0.5em; margin-top:1em">
            ${userData.languages.map(s => `<span style="border:1px solid #b7791f; padding:2px 4px; font-size:0.8em">${s}</span>`).join('')}
        </div>
    </div>
`;

    // Template 8: Bordered Professional
    document.getElementById('tpl-8').innerHTML = `
    <div class="tpl-bordered">
        <div class="stamp">OFFICIAL CV</div>
        <h2 style="font-size:1.2em">${userData.fullName}</h2>
        <div style="font-size:1em; margin-bottom:2em">${userData.tagline}</div>
        <hr style="border:0; border-top:1px solid #2d3748; margin:2em 0">
        <p style="font-size: 1em; margin:2em 0; line-height:1.2"><b>Profile:</b> ${userData.summary}</p>
        <div style="display:grid; grid-template-columns: 1fr; gap:16px">
            <div style="font-size:1em"><b>Contact:</b><br>${userData.place}<br>${userData.contact.email}</div>
            <div style="font-size:1em"><b>Experience:</b><br>${userData.experience.map(e => `${e.company} - ${e.role}<br>`).join('')}</div>
            <div style="font-size:1em"><b>Skills:</b><br>${userData.skills.map(lang => `${lang}`)}</div>
            <div style="font-size:1em"><b>Languages:</b><br>${userData.languages.map(lang => `${lang}`)}</div>
        </div>
    </div>
`;

    // Template 9: Sidebar Duo
    document.getElementById('tpl-9').innerHTML = `
    <div class="tpl-duo">
        <div class="left">
            <div style="font-weight:bold; font-size:1.2em">SKILLS</div>
            <div style="font-size:0.8em; margin-top:1em">${userData.skills.join('<br>')}</div>
            <div style="font-weight:bold; font-size:1.2em; margin-top:2em">LANGS</div>
            <div style="font-size:0.8em">${userData.languages.join(', ')}</div>
        </div>
        <div class="right">
            <h3 style="color:#2f855a;font-size:1.2em;">${userData.fullName}</h3>
            <p style="font-size:1em; margin:8px 0">${userData.summary}</p>
            <div style="background:#f0fff4; padding:1em; font-size:1em; margin:1em 0">
                <b>Experience:</b><br> ${userData.experience.map(e => `${e.company} - ${e.role}<br><br>`).join('')}
            </div>
            <div style="background:#f0fff4; padding:1em; font-size:1em;margin:1em 0">
                <b>Contact:</b><br> ${userData.contact.email}<br>${userData.contact.phone}
            </div>
        </div>
    </div>
`;

    // Template 10: Modern Noir
    document.getElementById('tpl-10').innerHTML = `
    <div class="tpl-noir">
        <h2>${userData.fullName.toUpperCase()}</h2>
        <div class="meta" style="margin:2em 0">${userData.tagline} <br>// ${userData.place}</div>
        <p style="font-size:1em; color:#aaa; margin-bottom:1em">${userData.summary}</p>
        <div style="border-top:1px solid #333; padding-top:1em">
            <small style="color:#f56565">EXPERIENCE</small>
            ${userData.experience.map(e => `
                <div style="margin-top:1em; font-size:0.8em">
                    <b>${e.company}</b> - ${e.role} - ${e.period}
                </div>
            `).join('')}
        </div>
        <div style="border-top:1px solid #333; margin-top:1em; padding-top:1em">
            <small style="color:#f56565">SKILLS</small>
            ${userData.skills.map(e => `
                <div style="margin-top:1em; font-size:0.8em">
                    <b>${e}</b>
                </div>
            `).join('')}
        </div>
        <div style="border-top:1px solid #333; margin-top:10px; padding-top:10px">
            <small style="color:#f56565">LANGUAGES</small>
            ${userData.languages.map(e => `
                <div style="margin-top:1em; font-size:0.8em">
                    <b>${e}</b>
                </div>
            `).join('')}
        </div>
    </div>
`;
};

renderTemplates();