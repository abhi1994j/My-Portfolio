
const aboutStyles = {
    section:
      'w-full min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 flex justify-between items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 overflow-x-hidden',
    container:
      'w-full flex flex-col items-center space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14',
    header: {
      wrapper:
        'flex flex-col space-y-3 sm:space-y-4 items-center w-full max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-4xl px-2',
      title:
        'text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent text-center',
      divider:
        'h-1.5 rounded-full w-20 sm:w-24 md:w-28 bg-gradient-to-r from-indigo-600 to-violet-600',
      descriptionWrapper:
        'w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mb-4 px-2',
      description:
        'text-base sm:text-lg md:text-xl text-gray-600 text-center leading-relaxed sm:leading-loose',
    },
    grid: {
      main: 'grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-10 w-full max-w-6xl px-2 sm:px-4 md:px-6 lg:px-0 items-start',
      card: 'flex flex-col space-y-3 sm:space-y-4 bg-white rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 lg:p-9 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out border border-gray-100 hover:border-indigo-200 h-fit',
    },
    journey: {
      title:
        'text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3',
      text: 'text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed sm:leading-loose',
    },
    education: {
      title:
        'text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 ',
      degreeWrapper:
        'bg-gradient-to-r from-indigo-50 via-violet-50 to-indigo-50 rounded-xl p-4 sm:p-5 border-l-4 border-indigo-500 shadow-sm hover:shadow-md transition-all duration-500',
      degree:
        'font-bold text-base sm:text-lg md:text-xl text-indigo-900 flex items-center gap-2',
      degreeIcon: 'w-5 h-5 sm:w-6 sm:h-6 text-indigo-600',
      institution:
        'text-sm sm:text-base md:text-lg text-gray-600 mt-2 flex items-center gap-2',
      institutionIcon: 'w-4 h-4 sm:w-5 sm:h-5 text-violet-500',
      experienceWrapper:
        'mt-4 sm:mt-5 md:mt-6 bg-gradient-to-br from-white via-indigo-50/30 to-violet-50/30 rounded-xl p-4 sm:p-5 md:p-6 border border-indigo-200 shadow-sm hover:shadow-lg transition-all duration-500',
      experienceHeader:
        'flex items-center gap-3 mb-4 sm:mb-5 pb-3 sm:pb-4 border-b-2 border-indigo-200',
      experienceBadge:
        'bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-md',
      experienceTitle:
        'text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent',
      list: 'space-y-3 sm:space-y-4',
      listItem:
        'flex items-start group hover:bg-indigo-50/50 p-2 sm:p-3 rounded-lg transition-all duration-300',
      bullet:
        'min-w-[24px] min-h-[24px] sm:min-w-[28px] sm:min-h-[28px] flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-500 text-white rounded-full mr-3 sm:mr-4 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0 text-xs sm:text-sm font-bold shadow-sm',
      text: 'text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed flex-1',
      highlight:
        'font-bold text-indigo-700 bg-gradient-to-r from-indigo-100 to-violet-100 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-sm sm:text-base md:text-lg border border-indigo-200 shadow-sm',
    },
    skills: {
      wrapper:
        'mt-6 sm:mt-8 md:mt-10 w-full max-w-6xl px-2 sm:px-4 md:px-6 lg:px-0',
      title:
        'text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-7 md:mb-8 text-center bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent',
      grid: 'flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10 md:mb-12',
      badge:
        'bg-gradient-to-r from-indigo-100 to-violet-100 hover:from-indigo-200 hover:to-violet-200 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 font-semibold rounded-full text-sm sm:text-base text-gray-800 shadow-md hover:shadow-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-default border border-indigo-200 active:scale-95',
    },
    technologies: {
      title:
        'text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-7 md:mb-8 text-center bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent',
      grid: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full max-w-6xl px-2 sm:px-4 md:px-6 lg:px-0',
      card: 'flex flex-col gap-3 sm:gap-4 items-center bg-white rounded-xl sm:rounded-2xl py-8 sm:py-9 md:py-10 px-5 sm:px-6 md:px-7 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out border border-gray-100 hover:border-indigo-300 hover:-translate-y-1 sm:hover:-translate-y-2 group active:translate-y-0',
      iconWrapper:
        'bg-gradient-to-br from-indigo-100 to-violet-100 rounded-full p-4 sm:p-5 md:p-6 group-hover:scale-110 transition-transform duration-500 ease-in-out',
      icon: 'text-3xl sm:text-4xl text-indigo-600',
      heading:
        'text-base sm:text-lg md:text-xl font-bold text-center text-gray-800 group-hover:text-indigo-600 transition-colors duration-500 ease-in-out',
      body: 'text-sm sm:text-base text-center text-gray-600 leading-relaxed',
    },
  };

const projectStyles = {
    section: 'w-full px-4 py-16 bg-gray-50',
    container: 'max-w-6xl mx-auto flex flex-col items-center space-y-10',
    header: {
      wrapper: 'flex flex-col items-center text-center space-y-4 max-w-2xl',
      title: 'text-3xl md:text-4xl font-bold tracking-tight text-gray-900',
      divider: 'h-1 w-20 bg-black rounded-full',
      description: 'text-gray-500 text-base md:text-lg',
    },
    grid: 'grid grid-cols-1 md:grid-cols-2 gap-10 w-full',
    card: {
      wrapper:
        'group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1',
      imageWrapper: 'relative overflow-hidden',
      image:
        'w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105',
      content: 'p-6 md:p-8 flex flex-col space-y-4',
      title:
        'text-xl font-semibold text-gray-900 group-hover:text-black transition-colors',
      description: 'text-gray-600 text-sm leading-relaxed',
      techWrapper: 'flex flex-wrap gap-2',
      techBadge:
        'bg-gray-100 border border-gray-200 px-3 py-1 text-xs rounded-full text-gray-700',
      buttonWrapper: 'flex gap-4 pt-2',
      button:
        'inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-800 hover:bg-black hover:text-white hover:border-black transition-colors',
    },
  };
  export {projectStyles , aboutStyles}
