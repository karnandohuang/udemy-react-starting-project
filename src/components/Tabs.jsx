export default function Tabs ({ ButtonsContainer = span, buttons, children }) {
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    )
}