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
  export {projectStyles}
