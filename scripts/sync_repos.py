import json
import subprocess
from pathlib import Path

def fetch_repos():
    cmd = [
        "gh", "repo", "list", "omid-io",
        "--limit", "60",
        "--json", "name,description,homepageUrl,stargazerCount,isFork,visibility,updatedAt,repositoryTopics,parent"
    ]
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", check=True)
        repos = json.loads(result.stdout)
        return repos
    except Exception as e:
        print(f"Error fetching repos via gh: {e}")
        return []

def main():
    root = Path(__file__).resolve().parent.parent
    data_dir = root / "data"
    data_dir.mkdir(exist_ok=True)

    repos = fetch_repos()
    if not repos:
        print("No repos fetched or gh CLI error.")
        return

    output_file = data_dir / "portfolio-data.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump({"updated_at": "2026-09-23", "repos": repos}, f, indent=2, ensure_ascii=False)

    print(f"Successfully generated {output_file} with {len(repos)} repositories.")

if __name__ == "__main__":
    main()
