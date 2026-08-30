// Vercel serverless: GET /api/move-tracker
// Requires env KINGSHOT_API_KEY

const SEED = {"kingdomId": "2362", "fromTag": "SVR", "toTag": "TFU", "movers": [{"primeRank": 1, "name": "TH31〆AND0NLY", "power": 50688420, "hq": 30, "role": "R4", "from": "SVR", "to": "TFU"}, {"primeRank": 3, "name": "numaan", "power": 42076633, "hq": 29, "role": "R5", "from": "SVR", "to": "TFU"}, {"primeRank": 7, "name": "SirDrizALot", "power": 32380295, "hq": 26, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 8, "name": "Scrumdiddly", "power": 30802425, "hq": 26, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 9, "name": "Bones", "power": 27502326, "hq": 25, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 10, "name": "Dark", "power": 27012117, "hq": 25, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 12, "name": "Nyx", "power": 24314667, "hq": 25, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 13, "name": "LLÚVATAR", "power": 23491613, "hq": 24, "role": "R4", "from": "SVR", "to": "TFU"}, {"primeRank": 14, "name": "jersniper", "power": 23326941, "hq": 25, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 15, "name": "亗k4", "power": 22958520, "hq": 26, "role": "R4", "from": "SVR", "to": "TFU"}, {"primeRank": 16, "name": "MistyDawn", "power": 22780629, "hq": 24, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 17, "name": "StrokerAce", "power": 22384081, "hq": 25, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 20, "name": "СИВИЙ", "power": 20862259, "hq": 23, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 21, "name": "ZAYGIIII", "power": 20834873, "hq": 26, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 22, "name": "HealthCareCeo", "power": 20738428, "hq": 25, "role": "R4", "from": "SVR", "to": "TFU"}, {"primeRank": 23, "name": "GIOTTOMAN", "power": 20205911, "hq": 24, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 24, "name": "EZZELDEEN", "power": 20174783, "hq": 25, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 25, "name": "Moana", "power": 20035392, "hq": 25, "role": "R4", "from": "SVR", "to": "TFU"}, {"primeRank": 26, "name": "Lancelot", "power": 19996410, "hq": 24, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 27, "name": "Sazabi", "power": 19876881, "hq": 25, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 30, "name": "niky", "power": 19372115, "hq": 25, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 31, "name": "gan423", "power": 19321961, "hq": 24, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 34, "name": "Roman", "power": 18775994, "hq": 23, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 36, "name": "蛋蛋不吃蛋", "power": 18598308, "hq": 24, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 37, "name": "I'm just a guy", "power": 18583236, "hq": 24, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 44, "name": "SirNil", "power": 17823533, "hq": 24, "role": "R4", "from": "SVR", "to": "TFU"}, {"primeRank": 45, "name": "Riddle", "power": 17736160, "hq": 24, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 46, "name": "MrClay", "power": 17524814, "hq": 23, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 48, "name": "Lord Raven", "power": 17375176, "hq": 23, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 49, "name": "Popzy", "power": 17266432, "hq": 24, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 52, "name": "큰형님", "power": 17103232, "hq": 23, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 54, "name": "GANDALF", "power": 16974287, "hq": 24, "role": "R4", "from": "SVR", "to": "TFU"}, {"primeRank": 55, "name": "MEEDO", "power": 16815120, "hq": 24, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 56, "name": "Prymitive", "power": 16811592, "hq": 24, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 59, "name": "Dangerdog", "power": 16742687, "hq": 24, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 61, "name": "RubTumpkins", "power": 16631622, "hq": 23, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 62, "name": "ZiriKiller", "power": 16617385, "hq": 23, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 63, "name": "McSekanlı", "power": 16499157, "hq": 24, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 64, "name": "Zitos", "power": 16416359, "hq": 23, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 65, "name": "Thelordduke", "power": 16375134, "hq": 24, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 66, "name": "Joyboy", "power": 16336926, "hq": 22, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 68, "name": "Odysseus", "power": 16143243, "hq": 24, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 69, "name": "Amira", "power": 16081169, "hq": 22, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 70, "name": "IsLena", "power": 16033470, "hq": 23, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 72, "name": "rodan_22", "power": 15974557, "hq": 22, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 76, "name": "Lordihno", "power": 15842285, "hq": 23, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 79, "name": "holy lord", "power": 15702290, "hq": 23, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 85, "name": "Ⓢⓚⓨ", "power": 15399723, "hq": 24, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 88, "name": "ALİK", "power": 15282456, "hq": 24, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 89, "name": "Baus Hawg", "power": 15266008, "hq": 22, "role": "R2", "from": "SVR", "to": "TFU"}, {"primeRank": 92, "name": "zhongyu", "power": 14830200, "hq": 20, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 99, "name": "AthenaX", "power": 13217985, "hq": 23, "role": "R3", "from": "SVR", "to": "TFU"}, {"primeRank": 100, "name": "Beastiee", "power": 11793748, "hq": 22, "role": "R4", "from": "SVR", "to": "TFU"}]};

function normalizeName(name) {
  return String(name || "")
    .replace(/[\u00a0\u2000-\u200b\ufeff]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase("en");
}

function formatPower(n) {
  if (n >= 1e9) return `${Number((n / 1e9).toFixed(2))}B`;
  if (n >= 1e6) return `${Number((n / 1e6).toFixed(1))}M`;
  if (n >= 1e3) return `${Number((n / 1e3).toFixed(1))}K`;
  return String(n);
}

async function fetchRoster(kingdomId, tag, apiKey, baseUrl) {
  const url = `${baseUrl}/alliances/${encodeURIComponent(kingdomId)}/${encodeURIComponent(tag)}?include=info,roster`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "X-Api-Key": apiKey,
      Accept: "application/json",
    },
  });
  const payload = await res.json().catch(() => null);
  if (!res.ok || !payload || payload.ok === false) {
    const msg = (payload && (payload.error || payload.message)) || `HTTP ${res.status} for [${tag}]`;
    const err = new Error(msg);
    err.status = res.status;
    throw err;
  }
  const members =
    payload.members ||
    payload.roster ||
    (payload.data && (payload.data.members || payload.data.roster)) ||
    [];
  return {
    members: Array.isArray(members) ? members : [],
    cachedAt: payload.cached_at ?? null,
    ageSeconds: payload.age_seconds ?? null,
    fresh: payload.fresh ?? null,
  };
}

function memberName(m) {
  return m.nick_name || m.nickname || m.name || m.player_name || m.username || "";
}

function memberPower(m) {
  const n = Number(m.power ?? m.player_power ?? m.total_power ?? 0);
  return Number.isFinite(n) ? n : 0;
}

function memberHq(m) {
  const n = Number(m.town_center_level ?? m.tc_level ?? m.tc);
  return Number.isFinite(n) && n > 0 ? n : null;
}

function memberRole(m) {
  return m.alliance_rank_label || m.rank_label || m.role || null;
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "GET") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const apiKey = (process.env.KINGSHOT_API_KEY || "").trim();
  if (!apiKey) {
    res.status(500).json({
      ok: false,
      error: "KINGSHOT_API_KEY is not set. Add it in Vercel Project Settings → Environment Variables.",
    });
    return;
  }

  const baseUrl = (process.env.KINGSHOT_API_BASE_URL || "https://api.kingshotstats.com/v1").replace(/\/+$/, "");
  const kingdomId = (req.query.kingdomId || SEED.kingdomId || "2362").toString();
  const fromTag = (req.query.from || SEED.fromTag || "SVR").toString().toUpperCase();
  const toTag = (req.query.to || SEED.toTag || "TFU").toString().toUpperCase();

  try {
    const [fromRoster, toRoster] = await Promise.all([
      fetchRoster(kingdomId, fromTag, apiKey, baseUrl),
      fetchRoster(kingdomId, toTag, apiKey, baseUrl),
    ]);

    const fromByName = new Map();
    for (const m of fromRoster.members) fromByName.set(normalizeName(memberName(m)), m);
    const toByName = new Map();
    for (const m of toRoster.members) toByName.set(normalizeName(memberName(m)), m);

    const players = (SEED.movers || []).map((mover) => {
      const key = normalizeName(mover.name);
      const inFrom = fromByName.get(key) || null;
      const inTo = toByName.get(key) || null;
      let status;
      if (inTo && inFrom) status = "still_listed_both";
      else if (inTo) status = "moved";
      else if (inFrom) status = "yet_to_move";
      else status = "not_found";
      const live = inTo || inFrom;
      return {
        primeRank: mover.primeRank,
        name: mover.name,
        plannedPower: mover.power,
        plannedPowerLabel: formatPower(mover.power),
        hq: live ? memberHq(live) : mover.hq,
        role: live ? memberRole(live) || mover.role : mover.role,
        from: fromTag,
        to: toTag,
        status,
        statusLabel:
          status === "yet_to_move"
            ? `Yet to move to ${toTag}`
            : status === "moved"
              ? `Moved to ${toTag}`
              : status === "still_listed_both"
                ? `Listed in ${fromTag} and ${toTag}`
                : "Not found in either roster",
        currentAlliance: inTo ? toTag : inFrom ? fromTag : null,
        livePower: live ? memberPower(live) : null,
        livePowerLabel: live ? formatPower(memberPower(live)) : null,
      };
    });

    const counts = {
      total: players.length,
      yetToMove: players.filter((p) => p.status === "yet_to_move").length,
      moved: players.filter((p) => p.status === "moved" || p.status === "still_listed_both").length,
      notFound: players.filter((p) => p.status === "not_found").length,
    };

    res.status(200).json({
      ok: true,
      kingdomId,
      fromTag,
      toTag,
      retrievedAt: new Date().toISOString(),
      fromRoster: {
        memberCount: fromRoster.members.length,
        cachedAt: fromRoster.cachedAt,
        ageSeconds: fromRoster.ageSeconds,
        fresh: fromRoster.fresh,
        fromCache: false,
      },
      toRoster: {
        memberCount: toRoster.members.length,
        cachedAt: toRoster.cachedAt,
        ageSeconds: toRoster.ageSeconds,
        fresh: toRoster.fresh,
        fromCache: false,
      },
      counts,
      players,
      warnings: [],
    });
  } catch (error) {
    res.status(error.status && Number.isFinite(error.status) ? error.status : 502).json({
      ok: false,
      error: error.message || "Failed to fetch Kingshot rosters",
      source: "kingshot",
    });
  }
};
