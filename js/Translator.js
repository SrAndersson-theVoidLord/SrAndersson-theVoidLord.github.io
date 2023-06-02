const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		if (xhr.status === 200) {
			const translation = xhr.responseXML;
			const select = document.getElementById('language-select');
            if(document.title == "Home"){
            var developments = document.getElementById('developments_');
            var experience = document.getElementById('experience_');
            var projects = document.getElementById('projects_');
            var softwareSpace = document.getElementById('software_Space_Description__');
            var aboutMe = document.getElementById('about_Me_');
            var description = document.getElementById('description_');
            var personalDescription = document.getElementById('personal_Description_');
            var personalDescription2 = document.getElementById('personal_Description2_');
            
            
        }
            const languages = document.getElementById('title_Lang');
            const languages_1 = document.getElementById('title_Lang_1');
            const languages_2 = document.getElementById('title_Lang_2');
            const languages_3 = document.getElementById('title_Lang_3');
            const profession = document.getElementById('profession_');
            const residence = document.getElementById('residence_');
            const city = document.getElementById('city_');
            const age = document.getElementById('age_');
            const hard_skills = document.getElementById('hard_skills_');
            const git_knowledge = document.getElementById('git_knowledge_');
            const database_knowledge = document.getElementById('database_usage_');
            const scrum_knowledge = document.getElementById('scrum_knowledge_');
            const server_infrastructure = document.getElementById('server_infrastructure_');
            const linux_knowledge = document.getElementById('linux_knowledge_');
            const soft_skills = document.getElementById('soft_skills_');
            const focus_Group = document.getElementById('focusGroup_');
            const companionship = document.getElementById('companionship_');
            const dialog = document.getElementById('dialog_');
            const leadership = document.getElementById('leadership_');
            const responsability = document.getElementById('responsability_');
            const analisis = document.getElementById('analisis_');
            const selftaught = document.getElementById('selftaught_');
            const versatility = document.getElementById('versatility_');

            
            const download_CV = document.getElementById('download_CV_Button');
            

            if(document.title == "Contact"){
                var information = document.getElementById('contact_information');
                var country = document.getElementById('contact_country');
                var localCity = document.getElementById('contact_city');
                var street = document.getElementById('contact_street');
                var email = document.getElementById('contact_email');
                var signalUser = document.getElementById('contact_signalUser');
                var discordID = document.getElementById('contact_DiscordID');
                var phone = document.getElementById('contact_phone');
                var officePhone = document.getElementById('contact_officePhone');
                var cellPhone = document.getElementById('contact_cellphone');
                var socialNetworks = document.getElementById('contact_socialNetworks');
                }
			
                if(document.title == "History"){
                    var education = document.getElementById('education_');

                    var university = document.getElementById('universidad');
                    var universityClass = document.getElementById('universidad_class');
                    var universityDate = document.getElementById('universidad_date');
                    var universityDescription = document.getElementById('universidad_description');

                    
                    var selftaughtStudies = document.getElementById('selftaught_studies');
                    var selftaughtStudiesClass = document.getElementById('selftaught_studies_class');
                    var selftaughtStudiesDate = document.getElementById('selftaught_studies_date');
                    var selftaughtStudiesDescription = document.getElementById('selftaught_studies_description');

                    var selftaughtWeb = document.getElementById('selftaught_web');
                    var selftaughtWebClass = document.getElementById('selftaught_web_class');
                    var selftaughtWebDate = document.getElementById('selftaught_web_date');
                    var selftaughtWebDescription = document.getElementById('selftaught_web_description');

                    var english = document.getElementById('english_title');
                    var englishClass = document.getElementById('english_class');
                    var englishDate = document.getElementById('english_date');
                    var englishDescription = document.getElementById('english_description');

                    var technician = document.getElementById('technician_title');
                    var technicianClass = document.getElementById('technician_class');
                    var technicianDate = document.getElementById('technician_date');
                    var technicianDescription = document.getElementById('technician_description');
                    var technicianCertificate = document.getElementById('technician_certificate');
                    

                        
                    var workHistory = document.getElementById('work_history');

                    var work1position = document.getElementById('work1_position');
                    var work1date = document.getElementById('work1_date');
                    var work1description = document.getElementById('work1_description');

                    var work2position = document.getElementById('work2_position');
                    var work2date = document.getElementById('work2_date');
                    var work2description = document.getElementById('work2_description');

                    var work3position = document.getElementById('work3_position');
                    var work3date = document.getElementById('work3_date');
                    var work3description = document.getElementById('work3_description');

                    var work4position = document.getElementById('work4_position');
                    var work4date = document.getElementById('work4_date');
                    var work4description = document.getElementById('work4_description');

                    var work5position = document.getElementById('work5_position');
                    var work5date = document.getElementById('work5_date');
                    var work5description = document.getElementById('work5_description');
                    
                        
                    
                    }

			select.addEventListener('change', function() {
				const lang = select.value;
                if(document.title == "Home"){
                var developmentsText = translation.getElementsByTagName(lang)[0].getElementsByTagName('developments')[0].textContent;
                var experienceText = translation.getElementsByTagName(lang)[0].getElementsByTagName('experience')[0].textContent;
                var projectsText = translation.getElementsByTagName(lang)[0].getElementsByTagName('projects')[0].textContent;
                var softwareSpaceText = translation.getElementsByTagName(lang)[0].getElementsByTagName('softwareSpace')[0].textContent;
                var aboutMeText = translation.getElementsByTagName(lang)[0].getElementsByTagName('aboutMe')[0].textContent;
                var descriptionText = translation.getElementsByTagName(lang)[0].getElementsByTagName('description')[0].textContent;
                var personalDescriptionText = translation.getElementsByTagName(lang)[0].getElementsByTagName('personalDescription')[0].textContent;
                var personalDescriptionText2 = translation.getElementsByTagName(lang)[0].getElementsByTagName('personalDescription2')[0].textContent;
                
            }
                const languagesText = translation.getElementsByTagName(lang)[0].getElementsByTagName('languages')[0].textContent;
                const languagesText_1 = translation.getElementsByTagName(lang)[0].getElementsByTagName('languages_1')[0].textContent;
                const languagesText_2 = translation.getElementsByTagName(lang)[0].getElementsByTagName('languages_2')[0].textContent;
                const languagesText_3 = translation.getElementsByTagName(lang)[0].getElementsByTagName('languages_3')[0].textContent;
                
                const professionText = translation.getElementsByTagName(lang)[0].getElementsByTagName('profession')[0].textContent;
                const residenceText = translation.getElementsByTagName(lang)[0].getElementsByTagName('residence')[0].textContent;
                const cityText = translation.getElementsByTagName(lang)[0].getElementsByTagName('city')[0].textContent;
                const ageText = translation.getElementsByTagName(lang)[0].getElementsByTagName('age')[0].textContent;
                const hard_skillsText = translation.getElementsByTagName(lang)[0].getElementsByTagName('hard_skills')[0].textContent;
                const git_knowledgeText = translation.getElementsByTagName(lang)[0].getElementsByTagName('git_knowledge')[0].textContent;
                const database_knowledgeText = translation.getElementsByTagName(lang)[0].getElementsByTagName('database_knowledge')[0].textContent;               
                const scrum_knowledgeText = translation.getElementsByTagName(lang)[0].getElementsByTagName('scrum_knowledge')[0].textContent;
                const server_infrastructureText = translation.getElementsByTagName(lang)[0].getElementsByTagName('server_infrastructure')[0].textContent;
                const linux_knowledgeText = translation.getElementsByTagName(lang)[0].getElementsByTagName('linux_knowledge')[0].textContent;
                
                const softSkillsText = translation.getElementsByTagName(lang)[0].getElementsByTagName('soft_skills')[0].textContent;
                const focusGroupText = translation.getElementsByTagName(lang)[0].getElementsByTagName('focus_Group')[0].textContent;
                const companionshipText = translation.getElementsByTagName(lang)[0].getElementsByTagName('companionship')[0].textContent;
                const dialogText = translation.getElementsByTagName(lang)[0].getElementsByTagName('dialog')[0].textContent;
                const leadershipText = translation.getElementsByTagName(lang)[0].getElementsByTagName('leadership')[0].textContent;
                const responsabilityText = translation.getElementsByTagName(lang)[0].getElementsByTagName('responsability')[0].textContent;
                const analisisText = translation.getElementsByTagName(lang)[0].getElementsByTagName('analisis')[0].textContent;
                const selftaughtText = translation.getElementsByTagName(lang)[0].getElementsByTagName('selftaught')[0].textContent;
                const versatilityText = translation.getElementsByTagName(lang)[0].getElementsByTagName('versatility')[0].textContent;


                const downloadCVText = translation.getElementsByTagName(lang)[0].getElementsByTagName('download_CV')[0].textContent;
                
                if(document.title == "Contact"){
                    var informationText = translation.getElementsByTagName(lang)[0].getElementsByTagName('information')[0].textContent;
                    var countryText = translation.getElementsByTagName(lang)[0].getElementsByTagName('country')[0].textContent;
                    var localCityText = translation.getElementsByTagName(lang)[0].getElementsByTagName('localCity')[0].textContent;
                    var streetText = translation.getElementsByTagName(lang)[0].getElementsByTagName('street')[0].textContent;
                    var emailText = translation.getElementsByTagName(lang)[0].getElementsByTagName('email')[0].textContent;
                    var signalUserText = translation.getElementsByTagName(lang)[0].getElementsByTagName('signalUser')[0].textContent;
                    var discordIDText = translation.getElementsByTagName(lang)[0].getElementsByTagName('discordID')[0].textContent;
                    var phoneText = translation.getElementsByTagName(lang)[0].getElementsByTagName('phone')[0].textContent;
                    var officePhoneText = translation.getElementsByTagName(lang)[0].getElementsByTagName('officePhone')[0].textContent;
                    var cellPhoneText = translation.getElementsByTagName(lang)[0].getElementsByTagName('cellPhone')[0].textContent;
                    var socialNetworksText = translation.getElementsByTagName(lang)[0].getElementsByTagName('socialNetworks')[0].textContent;
                    }
                    if(document.title == "History"){

                    var educationText = translation.getElementsByTagName(lang)[0].getElementsByTagName('education')[0].textContent;
                    
                    var universityText = translation.getElementsByTagName(lang)[0].getElementsByTagName('university')[0].textContent;
                    var universityClassText = translation.getElementsByTagName(lang)[0].getElementsByTagName('universityClass')[0].textContent;
                    var universityDateText = translation.getElementsByTagName(lang)[0].getElementsByTagName('universityDate')[0].textContent;
                    var universityDescriptionText = translation.getElementsByTagName(lang)[0].getElementsByTagName('universityDescription')[0].textContent;

                    var selftaughtStudiesText = translation.getElementsByTagName(lang)[0].getElementsByTagName('selftaughtStudies')[0].textContent;
                    var selftaughtStudiesClassText = translation.getElementsByTagName(lang)[0].getElementsByTagName('selftaughtStudiesClass')[0].textContent;
                    var selftaughtStudiesDateText = translation.getElementsByTagName(lang)[0].getElementsByTagName('selftaughtStudiesDate')[0].textContent;
                    var selftaughtStudiesDescriptionText = translation.getElementsByTagName(lang)[0].getElementsByTagName('selftaughtStudiesDescription')[0].textContent;

                    var selftaughtWebText = translation.getElementsByTagName(lang)[0].getElementsByTagName('selftaughtWeb')[0].textContent;
                    var selftaughtWebClassText = translation.getElementsByTagName(lang)[0].getElementsByTagName('selftaughtWebClass')[0].textContent;
                    var selftaughtWebDateText = translation.getElementsByTagName(lang)[0].getElementsByTagName('selftaughtWebDate')[0].textContent;
                    var selftaughtWebDescriptionText = translation.getElementsByTagName(lang)[0].getElementsByTagName('selftaughtWebDescription')[0].textContent;

                    var englishText = translation.getElementsByTagName(lang)[0].getElementsByTagName('english')[0].textContent;
                    var englishClassText = translation.getElementsByTagName(lang)[0].getElementsByTagName('englishClass')[0].textContent;
                    var englishDateText = translation.getElementsByTagName(lang)[0].getElementsByTagName('englishDate')[0].textContent;
                    var englishDescriptionText = translation.getElementsByTagName(lang)[0].getElementsByTagName('englishDescription')[0].textContent;

                    var technicianText = translation.getElementsByTagName(lang)[0].getElementsByTagName('technician')[0].textContent;
                    var technicianClassText = translation.getElementsByTagName(lang)[0].getElementsByTagName('technicianClass')[0].textContent;
                    var technicianDateText = translation.getElementsByTagName(lang)[0].getElementsByTagName('technicianDate')[0].textContent;
                    var technicianDescriptionText = translation.getElementsByTagName(lang)[0].getElementsByTagName('technicianDescription')[0].textContent;
                    var technicianCertificateText = translation.getElementsByTagName(lang)[0].getElementsByTagName('technicianCertificate')[0].textContent;

                    var workHistoryText = translation.getElementsByTagName(lang)[0].getElementsByTagName('workHistory')[0].textContent;

                    var work1positionText = translation.getElementsByTagName(lang)[0].getElementsByTagName('work1position')[0].textContent;
                    var work1dateText = translation.getElementsByTagName(lang)[0].getElementsByTagName('work1date')[0].textContent;
                    var work1descriptionText = translation.getElementsByTagName(lang)[0].getElementsByTagName('work1description')[0].textContent;
                    
                    var work2positionText = translation.getElementsByTagName(lang)[0].getElementsByTagName('work2position')[0].textContent;
                    var work2dateText = translation.getElementsByTagName(lang)[0].getElementsByTagName('work2date')[0].textContent;
                    var work2descriptionText = translation.getElementsByTagName(lang)[0].getElementsByTagName('work2description')[0].textContent;

                    var work3positionText = translation.getElementsByTagName(lang)[0].getElementsByTagName('work3position')[0].textContent;
                    var work3dateText = translation.getElementsByTagName(lang)[0].getElementsByTagName('work3date')[0].textContent;
                    var work3descriptionText = translation.getElementsByTagName(lang)[0].getElementsByTagName('work3description')[0].textContent;

                    var work4positionText = translation.getElementsByTagName(lang)[0].getElementsByTagName('work4position')[0].textContent;
                    var work4dateText = translation.getElementsByTagName(lang)[0].getElementsByTagName('work4date')[0].textContent;
                    var work4descriptionText = translation.getElementsByTagName(lang)[0].getElementsByTagName('work4description')[0].textContent;

                    var work5positionText = translation.getElementsByTagName(lang)[0].getElementsByTagName('work5position')[0].textContent;
                    var work5dateText = translation.getElementsByTagName(lang)[0].getElementsByTagName('work5date')[0].textContent;
                    var work5descriptionText = translation.getElementsByTagName(lang)[0].getElementsByTagName('work5description')[0].textContent;
                        
                        }
                
				
				
            if(document.title == "Home"){

                developments.textContent = developmentsText;
                experience.textContent = experienceText;
                projects.textContent = projectsText;
                softwareSpace.textContent = softwareSpaceText;
                aboutMe.textContent = aboutMeText;
                description.textContent = descriptionText;
                personalDescription.textContent = personalDescriptionText;
                personalDescription2.textContent = personalDescriptionText2;
            }
                languages.textContent = languagesText;
                languages_1.textContent = languagesText_1;
                languages_2.textContent = languagesText_2;
                languages_3.textContent = languagesText_3;

                profession.textContent = professionText;
                residence.textContent = residenceText;
                city.textContent = cityText;
                age.textContent = ageText;
                hard_skills.textContent = hard_skillsText;
                git_knowledge.textContent = git_knowledgeText;
                database_knowledge.textContent = database_knowledgeText;
                scrum_knowledge.textContent = scrum_knowledgeText;
                server_infrastructure.textContent = server_infrastructureText;
                linux_knowledge.textContent = linux_knowledgeText;

                soft_skills.textContent = softSkillsText;
                focus_Group.textContent = focusGroupText;
                companionship.textContent = companionshipText;
                dialog.textContent = dialogText;
                leadership.textContent = leadershipText;
                responsability.textContent = responsabilityText;
                analisis.textContent = analisisText;
                selftaught.textContent = selftaughtText;
                versatility.textContent = versatilityText;
                
                download_CV.textContent = downloadCVText;
                
                if(document.title == "Contact"){
                    information.textContent = informationText;
                    country.textContent = countryText;
                    localCity.textContent = localCityText;
                    street.textContent = streetText;
                    email.textContent = emailText;
                    signalUser.textContent = signalUserText;
                    discordID.textContent = discordIDText;
                    phone.textContent = phoneText;
                    officePhone.textContent = officePhoneText;
                    cellPhone.textContent = cellPhoneText;
                    socialNetworks.textContent = socialNetworksText;
                }

                if(document.title == "History"){

                    education.textContent = educationText;
                university.textContent = universityText;
                universityClass.textContent = universityClassText;
                universityDate.textContent = universityDateText;
                universityDescription.textContent = universityDescriptionText;
                selftaughtStudies.textContent = selftaughtStudiesText;
                selftaughtStudiesClass.textContent = selftaughtStudiesClassText;
                selftaughtStudiesDate.textContent = selftaughtStudiesDateText;
                selftaughtStudiesDescription.textContent = selftaughtStudiesDescriptionText;
                selftaughtWeb.textContent = selftaughtWebText;
                selftaughtWebClass.textContent = selftaughtWebClassText;
                selftaughtWebDate.textContent = selftaughtWebDateText;
                selftaughtWebDescription.textContent = selftaughtWebDescriptionText;

                english.textContent = englishText;
                englishClass.textContent = englishClassText;
                englishDate.textContent = englishDateText;
                englishDescription.textContent = englishDescriptionText;

                technician.textContent = technicianText;
                technicianClass.textContent = technicianClassText;
                technicianDate.textContent = technicianDateText;
                technicianDescription.textContent = technicianDescriptionText;
                technicianCertificate.textContent = technicianCertificateText;

                workHistory.textContent = workHistoryText;
                work1position.textContent = work1positionText;
                work1date.textContent = work1dateText;
                work1description.textContent = work1descriptionText;
                work2position.textContent = work2positionText;
                work2date.textContent = work2dateText;
                work2description.textContent = work2descriptionText;
                work3position.textContent = work3positionText;
                work3date.textContent = work3dateText;
                work3description.textContent = work3descriptionText;
                work4position.textContent = work4positionText;
                work4date.textContent = work4dateText;
                work4description.textContent = work4descriptionText;
                work5position.textContent = work5positionText;
                work5date.textContent = work5dateText;
                work5description.textContent = work5descriptionText;
                }
                
				
			});
			
			select.dispatchEvent(new Event('change'));
		}
	}
};

xhr.open('GET', 'translations/translation.xml');
xhr.responseType = 'document';
xhr.send();
