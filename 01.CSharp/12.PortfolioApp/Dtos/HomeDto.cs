using _12.PortfolioApp.Models;

namespace _12.PortfolioApp.Dtos;

public class HomeDto
{
    public User User { get; set; }
    public IList<Ability> Abilities { get; set; }
    public IList<SocialMedia> SocialMedias { get; set; }
    public IList<Experience> Experiences { get; set; }
}
