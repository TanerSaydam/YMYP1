namespace Newsletter.Consumer;
public sealed record ResponseDto(
    Guid BlogId,
    string Email);
