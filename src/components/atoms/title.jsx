function Title({ children, level = 'h1', className = '' }) {
  const Component = level;

  return (
    <Component className={className}>
      {children}
    </Component>
  )
}

export { Title }
