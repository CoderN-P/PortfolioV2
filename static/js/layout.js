
let selected = '';
let icon = '';

const blurs = ['Pycolor', 'NextChat', 'Country Bot', 'Curve Path Simulator', 'Research Tool', 'Stellar', 'physics', 'webdev', 'ai', 'robotics', 'app', 'engineering'];
const skills = {
    'Programming Languages': [
        ['python', 'bg-yellow-500'],
        ['typescript', 'bg-blue-500'],
        ['java', 'bg-red-500'],
        ['c++', 'bg-blue-500'],
        ['javascript', 'bg-yellow-500'],
        ['html', 'bg-orange-500'],
        ['css', 'bg-blue-500'],
        ['swift', 'bg-orange-500'],
        ['node.js', 'bg-green-500'],
    ],
    'Backend Tools + DBs': [
        ['flask', 'bg-yellow-500'],
        ['mongodb', 'bg-green-500'],
        ['sqlite', 'bg-yellow-500'],
        ['socket.io', 'bg-gray-400'],
        ['nginx', 'bg-green-500'],
        ['graphql', 'bg-pink-500'],
        ['docker', 'bg-blue-500'],
        ['next.js', 'bg-gray-600'],

    ],
    'Frontend Tools/Frameworks': [
        ['svelte', 'bg-red-500'],
        ['react', 'bg-blue-500'],
        ['tailwindcss', 'bg-teal-500'],
        ['jquery', 'bg-blue-500'],
    ],
    'ML/AI': [
        ['tensorflow', 'bg-orange-500'],
        ['numpy', 'bg-blue-500'],
        ['pandas', 'bg-gray-500'],
        ['scikit-learn', 'bg-yellow-500'],
        ['keras', 'bg-red-500'],
        ['opencv', 'bg-green-500'],
    ],
    'Other': [
        ['qt', 'bg-green-500'],
        ['git', 'bg-red-500'],
        ['arduino', 'bg-blue-500'],
        ['raspberry pi', 'bg-red-500'],
    ],
}
const projects = [
    {
        name: 'Research Tool',
        description: 'ResearchTool uses the power of web scraping and AI to speed up the process of researching. Just enter a prompt and ResearchTool will find the most relevant information for you.',
        madeWith: ['typescript', 'svelte', 'flask', 'python', 'tailwindcss'],
        colors: 'from-blue-500 to-orange-500',
        shortDescription: 'Research Faster with AI',
        github: 'https://github.com/CoderN-P/ResearchTool',
        link: 'https://researchtool.netlify.app/',
    },
    {
        name: 'Stellar',
        description: 'Stellar uses advanced AI to presonalize your learning experience. Through personalized questions and lessons, interactive projects, and more, Stellar makes your learning experience just so much better.',
        madeWith: ['svelte', 'typescript', 'tailwindcss', 'flask', 'python', 'mongodb'],
        colors: 'from-blue-500 to-purple-500',
        shortDescription: 'All your favorite learning tools, now in 1 app',
        github: 'https://github.com/Stellarlearning/Stellar',
        link: 'https://stellarlearning.app/'
    },
    {
        name: 'NextChat',
        description: 'NextChat is a chat application that uses the Next.js framework and Socket.io to provide real-time messaging. Users can create chats and invite members through a share code. The app uses MongoDB to store user data and tailwindcss for styling.',
        madeWith: ['typescript', 'next.js', 'socket.io', 'tailwindcss', 'mongodb', 'node.js'],
        colors: 'from-gray-600 to-blue-500',
        shortDescription: 'A simple but modern chatting application',
        github: 'https://github.com/CoderN-P/NextChat',
    },
    {
        name: 'Curve Path Simulator',
        description: 'This simulation uses the Pure Pursuit algorithm to follow paths defined by quintic hermite splines. The GUI allows you to create splines and visualize the path following. Next steps are to implement the path following on a robot.',
        madeWith: ['c++', 'qt'],
        colors: 'from-red-500 to-blue-500',
        shortDescription: 'Path Following Simulation',
        github: 'https://github.com/CoderN-P/CurvePathSimulator',
    },
    {
        name: 'Country Bot',
        description: 'Country Bot is a Discord bot that provides information about countries through fun games using the discord.py library. The bot uses the REST Countries API to get information about countries. Users can also create their own countries and work to increase its population.',
        madeWith: ['python', 'mongodb'],
        colors: 'from-green-500 to-blue-500',
        shortDescription: 'A fun discord bot about countries',
        github: 'https://github.com/CoderN-P/Country-Bot',
    },
    {
        name: 'Pycolor',
        shortDescription: 'Colors made simple',
        madeWith: ['python'],
        colors: 'from-red-500 via-green-500 to-purple-500',
        description: 'Pycolor is a Python library that provides easy access to color codes and names. It is a simple wrapper around thecolorapi.com',
        github: 'https://github.com/CoderN-P/Pycolor',
        link: 'https://pypi.org/project/pycolor-codern/'
    }
]
const skillToIcon = {
    'python': '/static/images/python.svg',
    'typescript': '/static/images/typescript-icon.svg',
    'java': '/static/images/java.svg',
    'c++': '/static/images/c-plusplus.svg',
    'javascript': '/static/images/javascript.svg',
    'html': '/static/images/html-5.svg',
    'css': '/static/images/css-3.svg',
    'next.js': '/static/images/nextjs-icon.svg',
    'svelte': '/static/images/svelte-icon.svg',
    'react': '/static/images/react.svg',
    'flask': '/static/images/flask.svg',
    'tailwindcss': '/static/images/tailwindcss-icon.svg',
    'mongodb': '/static/images/mongodb-icon.svg',
    'node.js': '/static/images/nodejs-icon.svg',
    'socket.io': '/static/images/socket.io.svg',
    'qt': '/static/images/qt.svg',
    'graphql': '/static/images/graphql.svg',
    'docker': '/static/images/docker-icon.svg',
    'nginx': '/static/images/nginx.svg',
    'sqlite': '/static/images/sqlite.svg',
    'jquery': '/static/images/jquery.svg',
    'swift': '/static/images/swift.svg',
    'tensorflow': '/static/images/tensorflow.svg',
    'numpy': '/static/images/numpy.svg',
    'pandas': '/static/images/pandas.svg',
    'arduino': '/static/images/arduino.svg',
    'raspberry pi': '/static/images/raspberry-pi.svg',
    'git': '/static/images/git.svg',
}
$(document).ready(function () {
    const pathname = $(location).attr("pathname");

    if (pathname === "/") {

        $('#home').removeClass('font-bold');
        $('#home').addClass('text-blue-500 font-bold');
        addSkills();
        addProjects();
        showBlurs();
        $('#skillsLink').click(() => scrollToId('skills'));
        $('#projectsLink').click(() => scrollToId('projects'));

    }


});

function addSkills() {
    for (let key in skills) {
        console.log(key);
        const skillGroup = skills[key];
        const skillDiv = $(`[id='${key}']`);

        skillGroup.map((skill) => {
            const skillHTML = `
                <div class="hover:scale-110 transition-all relative w-14 h-14">
                        <div id="${skill[0]}" onclick="changeSelected('${skill[0]}');" class="absolute p-2 rounded-xl backdrop-blur h-14 w-14 dark:bg-black/50 bg-white/50 border dark:border-gray-800 border-gray-200 z-10">
                            <img src="${skillToIcon[skill[0]]}"  class=" w-10 h-10"/>
                        </div>
                        <div class="z-0 rounded-xl w-11 h-11 top-1.5 left-1 absolute ${skill[1]} blur-lg"></div>
                    </div>
`
            skillDiv.append(skillHTML);
        });
    }
}

function changeSelected(id) {

    if (selected) {
        $(`#${selected}`).removeClass('scale-110');

        if (selected === id) {
            selected = '';
            icon = '';
            $('#selectedImage').attr('src', '');
            $('#selectedImage').addClass('hidden');
            $(`#selectedText`).text('No icon selected');
            return;
        }
    }

    $(`[id='${id}']`).addClass('scale-110');
    $(`#selectedText`).text(id);
    selected = id;
    icon = skillToIcon[id];
    $('#selectedImage').attr('src', icon);
    $('#selectedImage').removeClass('hidden');

}


function scrollToId(id) {
    $('html, body').animate({ scrollTop: $(`#${id}`).offset().top - 80}, 1250);
}

function addProjects(){
    projects.map((project) => {
        let projectHTML = `
            <div class="flex flex-col mt-8 w-full mb-16 gap-6 relative">
                <h1 style="width: fit-content;" class="text-6xl text-start font-bold min-h-20 text-transparent bg-clip-text bg-gradient-to-r ${project.colors}">${project.name}</h1>
                <h1 class="text-3xl font-bold dark:text-gray-400">${project.shortDescription}</h1>
                <img data-aos="fade-out" id="${project.name}" src="/static/images/${project.name}.png" class="w-full rounded-xl z-20 object-cover"/>
                <div data-aos="fade-out" id="${project.name}Blur" class="blur-lg w-full bg-gradient-to-r ${project.colors} absolute z-0"></div>
                
                <div id="${project.name}Desc" class="flex flex-col gap-6 rounded-xl p-4 mt-8 border dark:border-gray-800 dark:bg-gray-950">
                    <p class="text-xl dark:text-gray-400">
                        ${project.description}
                    </p>
                    <p class="font-bold dark:text-gray-400 text-2xl">Made With</p>
                    <div class="flex flex-wrap w-full gap-4">
                    
                ${project.madeWith.map((skill) => {
            return `
                        <div class="flex flex-col justify-center  bg-white rounded-xl gap-2 p-2 items-center">
                            <img src=${skillToIcon[skill]} class="h-10 w-10"/>
                        </div>
                    `;
        }).join('')}
            </div>
            <div class="flex gap-4">
            ${project.github ?
                `<button onClick="window.location.href='${project.github}';"
                        class="bg-gradient-to-r transition-all  hover:opacity-80 text-center inline-block  from-red-500 to-orange-500 w-auto font-bold rounded-xl p-4">
                    Github 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline-block ml-2 size-6 stroke-2 stroke-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>

                </button>` : ``
        }
            ${project.link ?
            `<button onClick="window.location.href='${project.link}';"
                        class="bg-gradient-to-r transition-all hover:opacity-80 text-center inline-block  from-red-500 to-orange-500 w-auto font-bold rounded-xl p-4">
                    Visit
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline-block ml-2 stroke-2 stroke-white size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>

                </button>` : ``
        }
                 </div>
                </div>
               </div>
            `;
        $('#projects').append(projectHTML);
    })

}

function showBlurs() {
    blurs.forEach(blur => {
        let el = $(`[id='${blur}']`);
        let offset = 20;
        if (['Stellar', 'Pycolor', 'Research Tool', 'NextChat', 'Curve Path Simulator', 'Country Bot'].includes(blur)){
            offset = 10;
        }
        const blurElement = $(`[id='${blur}Blur']`);
        blurElement.width(el.width()+offset);
        blurElement.height(el.height()+offset);
        blurElement.offset({top: el.offset().top, left: el.offset().left});

    });

}


