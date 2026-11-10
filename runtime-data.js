(() => {
  'use strict';

  const colors = {
    background: '#12232B', panel: '#19353B', panel_alt: '#24494B',
    line: '#527D79', text: '#E8F0EA', muted: '#B6CBC4', accent: '#E0A458',
    danger: '#D9644A', warning: '#F0B36A', route: '#51C7B9', success: '#7FBF8E'
  };
  const baseText = {
    'ui.title': 'Смотрители Соляных Маяков', 'ui.runtime.tag': 'СОЛЯНАЯ ТОПЬ · СИГНАЛЬНАЯ ЦЕПЬ',
    'ui.menu.title': 'Цепь маяков', 'ui.menu.subtitle': 'Выбери участок обороны. Каждый пройденный этап сохраняется у якорной стоянки.',
    'ui.play': 'Играть', 'ui.settings.title': 'Настройки', 'ui.about': 'Об игре',
    'ui.settings.back': 'Назад', 'ui.back': 'Назад', 'ui.start': 'Начать оборону',
    'ui.location': 'Карточка участка', 'ui.goal': 'Цель', 'ui.hook': 'Что впереди',
    'ui.stage': 'Участок', 'ui.stage.untitled': 'Неизвестный участок', 'ui.stage.summary': 'Новый прилив ждёт у края карты.',
    'ui.select': 'Выбрать участок', 'ui.locked': 'Закрыто', 'ui.next': 'Следующий участок',
    'ui.launch_phase': 'Начать прилив', 'ui.continue': 'К следующей фазе', 'ui.pause': 'Пауза', 'ui.speed': 'Ускорить',
    'ui.pause.tag': 'ПРИЛИВ ЗАМЕР', 'ui.pause.title': 'Пауза', 'ui.pause.description': 'Оборона остановлена. Все маяки и маршруты сохранены.',
    'ui.resume': 'Продолжить', 'ui.menu': 'К участкам',
    'ui.retry': 'Повторить фазу', 'ui.save': 'Сохранить сейчас', 'ui.saving': 'Сохранение готово',
    'ui.resource': 'Смола', 'ui.integrity': 'Целостность шпиля', 'ui.phase.status': 'Фаза',
    'ui.cost': '{value} смолы', 'ui.sell': 'Снять маяк', 'ui.upgrade': 'Усилить',
    'ui.choice.tag': 'СИГНАЛЬНЫЙ ВЫБОР', 'ui.choice.title': 'Усиль цепь',
    'ui.choice.subtitle': 'Выбери один эффект перед следующим приливом.',
    'ui.choice.category': 'Настройка линз', 'ui.choice.description': 'Усиление действует до конца участка.',
    'ui.result.tag': 'СИГНАЛЬНЫЙ ОТЧЁТ', 'ui.result.victory': 'Участок удержан',
    'ui.result.defeat': 'Прилив прорвал цепь', 'ui.result.summary': 'Якорная стоянка сохранила твой путь.',
    'ui.score': 'Очки', 'ui.defeats': 'Отражено', 'ui.leaks': 'Прорывы', 'ui.builds': 'Маяки',
    'ui.achievements': 'Знаки смотрителя', 'ui.meta.tag': 'ЯКОРНАЯ СТОЯНКА', 'ui.meta.title': 'Знаки смотрителя',
    'ui.meta.currency': 'Сигнальные искры: {value}', 'ui.meta.unlock': 'Открыть', 'ui.meta.description': 'Постоянное улучшение цепи.',
    'ui.settings.tag': 'ПАРАМЕТРЫ', 'ui.settings.music': 'Громкость музыки', 'ui.settings.music_on': 'Музыка включена',
    'ui.settings.sfx': 'Громкость эффектов', 'ui.settings.sfx_on': 'Звуки включены', 'ui.settings.effects': 'Эффекты',
    'ui.settings.low': 'Мало', 'ui.settings.balanced': 'Обычно', 'ui.settings.high': 'Больше',
    'ui.settings.motion': 'Уменьшить движение', 'ui.settings.language': 'Язык', 'ui.settings.reset': 'Сбросить сохранение',
    'ui.tutorial.tag': 'ПЕРВОЕ ДЕЖУРСТВО', 'ui.tutorial.title': 'Смотри на маршрут',
    'ui.tutorial.welcome': 'Маяк уже прикрывает протоку. Выбери маяк внизу, поставь его на свободную клетку рядом с дорогой и нажми «Начать прилив».',
    'ui.tutorial.next': 'Понятно', 'ui.tutorial.finish': 'К обороне', 'ui.tutorial.replay': 'Обучение',
    'ui.warning.critical': 'Шпиль под угрозой', 'ui.warning.resource': 'Смолы становится мало',
    'ui.data.instructions': 'Файлы игры повреждены или отсутствуют. Проверьте, что assets, game_data.js и phaser.min.js лежат рядом с index.html.',
    'ui.data.no_diagnostics': 'Нет дополнительных сведений.', 'ui.data.error': 'Не удалось загрузить игру',
    'ui.loading': 'Зажигаем маяки…', 'ui.data.retry': 'Перезагрузить', 'ui.reset.confirm': 'Удалить сохранение и начать заново?',
    'ui.about.title': 'Об игре', 'ui.about.copy': 'Короткая стратегическая оборона в Соляной топи. Строй маяки, направляй прилив и сохраняй цепь света.',
    'ui.mute': 'Звук', 'ui.unmute': 'Включить звук', 'ui.muted': 'Звук выключен', 'ui.unmuted': 'Звук включён',
    'ui.signature.sluice': 'Открыть боковой шлюз', 'ui.signature.lens': 'Переключить линзу',
    'ui.signature.active': 'Сигнальная механика доступна', 'ui.sluice.used': 'Шлюз уже открыт в этой фазе',
    'ui.lens.long': 'Дальний сигнал', 'ui.lens.close': 'Ближний залп', 'ui.postgame': 'Кампания пройдена',
    'ui.postgame.copy': 'Свет маяков снова виден над топью. Спасибо, что удержал цепь.',
    'ui.postgame.replay': 'Сыграть ещё раз', 'ui.levels': 'Участки', 'ui.tutorial.skip': 'Пропустить'
  };

  function playerFacingMechanic(value) {
    const text = String(value || '').replace(/^(?:base|test|combine):\s*/i, '').trim();
    if (text.includes('mech_tide_sluice') && text.includes('mech_lantern_lens')) return 'Открой шлюз и настрой линзы, чтобы управлять приливом.';
    if (text.includes('mech_tide_sluice')) return 'Открой боковой шлюз и измени маршрут прилива.';
    if (text.includes('mech_lantern_lens')) return 'Настрой линзы маяков и выбери подходящую цель.';
    return text ? text[0].toLocaleUpperCase('ru-RU') + text.slice(1) : 'Удержи сигнальную цепь.';
  }

  const towerStats = {
    e_001: [38, 0.29, 0.92, 45], e_002: [62, 0.18, 0.72, 55],
    e_003: [27, 0.24, 0.82, 60], e_004: [52, 0.21, 0.68, 65],
    e_005: [34, 0.26, 0.78, 70], e_007: [31, 0.23, 0.9, 75],
    e_008: [24, 0.2, 1.05, 80], e_024: [43, 0.27, 0.75, 85]
  };
  const enemyStats = {
    e_009: [54, 0.072, 10], e_010: [125, 0.048, 16], e_011: [68, 0.09, 12],
    e_012: [88, 0.065, 14], e_013: [102, 0.055, 15], e_014: [118, 0.05, 18],
    e_015: [255, 0.037, 30], e_016: [72, 0.078, 14], e_017: [82, 0.084, 16]
  };

  function normalizeGameData(raw) {
    if (!raw || !Array.isArray(raw.progression)) return raw;
    const sourceEntities = Object.values(raw.entities?.entities || {}).flat().filter(Boolean);
    const byId = new Map(sourceEntities.map(entity => [entity.id, entity]));
    const imageManifest = raw.assets?.images || [];
    const assetFor = id => imageManifest.find(file => file.asset_id === id || file.asset_id.endsWith(`_${id}`))?.asset_id || '';
    const texts = { ...baseText };
    const defs = { player_or_core_agent: [], player_tools_or_actions: [], opposing_or_active_forces: [], world_entities: [] };
    const spriteDef = (entity, role, radius) => ({
      entity_id: entity.id, name_key: `entity.${entity.id}`, animation_class: entity.animation_class || 'none',
      interaction_class: entity.interaction_class || 'none', tags: role === 'enemy' ? ['tideborn'] : ['key_visual'],
      components: {
        Transform: { x: 0.5, y: 0.5 },
        Sprite: { asset_id: assetFor(entity.id), color: role === 'enemy' ? 'enemy' : role === 'tower' ? 'accent' : 'success', radius, scale: 1, layer: 'gameplay' }
      }
    });

    for (const entity of sourceEntities) {
      if (entity.name) texts[`entity.${entity.id}`] = entity.name;
      const asset = assetFor(entity.id);
      if (entity.type === 'Tower') {
        const [damage, range, rate, cost] = towerStats[entity.id] || [32, 0.22, 0.8, 65];
        const def = spriteDef(entity, 'tower', 0.048);
        def.components.Tower = {
          cost, cost_resource: 'res_002', sell_refund_ratio: 0.65, invested: cost, level: 1, path_levels: {},
          upgrade_paths: [{ path_id: `${entity.id}_lens`, tiers: [
            { name_key: `upgrade.${entity.id}.1`, cost: Math.round(cost * 0.7), modifiers: [{ target_component: 'Attack', target_value: 'damage', operation: 'multiplier', value: 1.3 }] },
            { name_key: `upgrade.${entity.id}.2`, cost: Math.round(cost * 1.2), modifiers: [{ target_component: 'Targeting', target_value: 'range', operation: 'multiplier', value: 1.22 }] }
          ] }]
        };
        def.components.Targeting = { range, priority_order: ['furthest_progress', 'nearest'], target_tags: ['tideborn'], target_id: null };
        def.components.Attack = { damage, rate, cooldown_remaining: 0, projectile_speed: 2.6, projectile_shape: 'circle', projectile_color: 'accent', projectile_radius: 0.008, hit_radius: 0.025 };
        def.components.Collider = { radius: 0.028, body_type: 'static' };
        def.components.GridAnchor = { row: 0, col: 0, occupied: true };
        defs.player_tools_or_actions.push(def);
      } else if (entity.type === 'PathFollower') {
        const [health, speed, reward] = enemyStats[entity.id] || [72, 0.06, 12];
        const def = spriteDef(entity, 'enemy', entity.id === 'e_015' ? 0.043 : 0.035);
        def.components.Health = { current: health, maximum: health, leak_damage: entity.id === 'e_015' ? 3 : 1, resistances: {} };
        def.components.PathFollower = { route_id: 'default', segment_index: 0, distance: 0, state: 'active' };
        def.components.Velocity = { speed };
        def.components.Collider = { radius: 0.024, body_type: 'dynamic' };
        def.components.Economy = { reward_resource: 'res_002', reward_amount: reward };
        defs.opposing_or_active_forces.push(def);
      } else if (entity.id === 'e_022') {
        const def = spriteDef(entity, 'core', 0.058);
        def.components.Objective = { objective_id: 'last_signal_spire' };
        def.components.Health = { current: 20, maximum: 20, leak_damage: 0 };
        defs.player_or_core_agent.push(def);
      } else if (entity.has_visual && asset) {
        const kind = entity.asset_kind || '';
        const radius = kind === 'parallax_layer' || kind === 'background_layer' ? 0.5 : kind.includes('tile') ? 0.5 : 0.043;
        const def = spriteDef(entity, kind.includes('enemy') ? 'enemy' : 'prop', radius);
        def.tags = [entity.asset_kind || 'visual'];
        defs.world_entities.push(def);
      }
    }

    const macros = raw.progression;
    const stages = macros.map((macro, macroIndex) => {
      const micros = macro.level_package?.micro_levels || [];
      const stageKey = `stage.${macroIndex + 1}`;
      const title = micros[0]?.title?.split(':')[0] || `Участок ${macroIndex + 1}`;
      texts[stageKey] = title;
      texts[`${stageKey}.summary`] = playerFacingMechanic(macro.introduced_mechanic || micros[0]?.objective || 'Новый прилив приближается.');
      const macroEnemies = (macro.entity_ids || []).filter(id => byId.get(id)?.type === 'PathFollower');
      const towerIds = new Set(defs.player_tools_or_actions.map(item => item.entity_id));
      const coreId = 'e_022';
      const phases = micros.map((micro, phaseIndex) => {
        const map = micro.tile_map || {};
        const rows = map.grid || [];
        const cols = Math.max(Number(map.cols) || 0, ...rows.map(row => row.length), 12);
        const rowCount = Math.max(Number(map.rows) || 0, rows.length, 5);
        const roadIds = new Set(Object.values(map.legend || {}).filter(id => String(id).includes('road_tile') && !String(id).includes('road_edge')));
        const cells = [];
        for (let r = 0; r < rows.length; r++) for (let c = 0; c < rows[r].length; c++) {
          const id = map.legend?.[rows[r][c]];
          if (roadIds.has(id)) cells.push({ r, c });
        }
        let route;
        if (cells.length) {
          const lane = cells.reduce((best, cell) => cells.filter(other => other.r === cell.r).length > cells.filter(other => other.r === best).length ? cell.r : best, cells[0].r);
          const path = cells.filter(cell => cell.r === lane).sort((a, b) => a.c - b.c);
          route = path.length > 1 ? [{ x: (path[0].c + 0.5) / cols, y: (lane + 0.5) / rowCount }, { x: (path.at(-1).c + 0.5) / cols, y: (lane + 0.5) / rowCount }] : null;
        }
        if (!route) route = [{ x: 0.12, y: 0.5 }, { x: 0.88, y: 0.5 }];
        const blocked = [];
        const buildable = [];
        for (let r = 0; r < rowCount; r++) for (let c = 0; c < cols; c++) {
          const code = rows[r]?.[c];
          if (['R', 'E', 'O', 'B'].includes(code)) blocked.push({ row: r, col: c });
          else if (!cells.some(cell => cell.r === r && cell.c === c)) buildable.push({ row: r, col: c });
        }
        const rawZones = (micro.micro_space?.zones || []).flatMap(zone => zone.entities_in_zone || []);
        const placed = rawZones.filter(item => towerIds.has(item.entity_id) && item.entity_id !== coreId).map(item => ({
          ...item, entity_category: 'gameplay', instance_count: Math.min(2, Number(item.instance_count) || 1)
        }));
        const sourceEnemy = rawZones.find(item => byId.get(item.entity_id)?.type === 'PathFollower');
        const enemyId = (sourceEnemy && byId.has(sourceEnemy.entity_id) ? sourceEnemy.entity_id : macroEnemies[phaseIndex % Math.max(1, macroEnemies.length)]) || 'e_009';
        const rawCount = Number(sourceEnemy?.instance_count) || (phaseIndex === 0 ? 2 : 3 + phaseIndex);
        const spawnCount = Math.max(2, Math.min(12, rawCount + Math.floor(macroIndex / 5)));
        const rewardText = (micro.rewards || []).find(value => String(value).startsWith('res_002')) || '';
        const rewardMatch = String(rewardText).match(/\+\s*(\d+(?:\.\d+)?)/);
        const decor = (micro.decorative_layout || []).filter(entry => assetFor(entry.entity_id)).map(entry => ({ ...entry, has_collision: false }));
        const regionalProps = (macro.entity_ids || []).filter(id => byId.get(id)?.asset_kind === 'depth_sprite' && assetFor(id));
        while (decor.length < 16 && regionalProps.length) {
          const index = decor.length, col = (index * 7 + macroIndex * 3) % cols, row = (index * 3 + 1) % rowCount;
          if (!cells.some(cell => cell.r === row && cell.c === col)) decor.push({
            entity_id: regionalProps[index % regionalProps.length], instance_count: 1, render_layer: index % 4 === 0 ? 'background_mid' : 'background_near',
            z_index: index % 4 === 0 ? 10 : 20, has_collision: false, parallax_factor: 0.08 + (index % 3) * 0.04,
            row: null, col: null, x: (col + 0.5) / cols, y: (row + 0.5) / rowCount, alpha: 0.58, small: true
          });
          else decor.push({ entity_id: regionalProps[index % regionalProps.length], instance_count: 1, render_layer: 'background_near', z_index: 20, has_collision: false, parallax_factor: 0.08, row: null, col: null, x: ((col + 2) % cols + 0.5) / cols, y: ((row + 2) % rowCount + 0.5) / rowCount, alpha: 0.46, small: true });
        }
        for (const layer of micro.parallax_layers || []) {
          if (byId.has(layer.entity_id)) decor.unshift({ entity_id: layer.entity_id, instance_count: 1, render_layer: 'background_far', z_index: -100, has_collision: false, parallax_factor: Number(layer.parallax_factor) || 0.2, x: 0.5, y: 0.45, alpha: Number(layer.alpha) || 0.8, is_parallax: true });
        }
        return {
          micro_level_id: micro.micro_level_id, sequence_index: phaseIndex + 1, phase: micro.phase,
          title_key: `phase.${macroIndex + 1}.${phaseIndex + 1}`, objective: { objective_id: `goal.${micro.micro_level_id}`, requirements: [] },
          world_or_board: { cols, rows: rowCount, build_cells: buildable, build_blocked_cells: blocked },
          spatial_extent: { cols, rows: rowCount }, route, decorative_layout: decor, entry_conditions: [], transition_conditions: [],
          entities_in_zone: placed, tile_map: { ...map, cols, rows: rowCount, grid: rows.map(row => row.padEnd(cols, 'X')) },
          parallax_layers: micro.parallax_layers || [], engine_backgrounds: micro.engine_backgrounds || [],
          light_sources: micro.light_sources || [], reward: rewardMatch ? { resource_id: 'res_002', amount: Number(rewardMatch[1]) } : { resource_id: 'res_002', amount: 12 + phaseIndex * 4 },
          spawn_plan: [{ entity_id: enemyId, count: spawnCount, interval_seconds: Math.max(0.48, 0.92 - macroIndex * 0.012), initial_delay_seconds: 0.3, route_id: 'default' }],
          source_objective: micro.objective, source_exit_type: micro.exit_type, macro_complete: micro.exit_type === 'macro_complete',
          build_cells: buildable, build_blocked_cells: blocked, sluice_used: false
        };
      });
      const levelNameKey = `stage.${macroIndex + 1}`;
      return {
        stage_id: macro.macro_level_id, title_key: levelNameKey, summary_key: `${levelNameKey}.summary`,
        macro_index: macroIndex, macro_name: title, expansion_hook: macro.exit_conditions || macro.introduced_mechanic || '',
        progression_goals: macro.progression_goals || [], micro_phases: phases, route: phases[0]?.route || [{ x: 0.12, y: 0.5 }, { x: 0.88, y: 0.5 }],
        spatial_extent: phases[0]?.spatial_extent || { cols: 12, rows: 5 }, objective_integrity: 20 + Math.floor(macroIndex / 4) * 2,
        meta_reward: { amount: 3 + Math.floor(macroIndex / 3) }, difficulty_curve: { type: 'linear', base: 0.82, step: 0.035, min: 0.75, max: 1.8 },
        source_macro: macro
      };
    });

    for (const entity of sourceEntities) for (const tier of [1, 2]) if (entity.type === 'Tower') texts[`upgrade.${entity.id}.${tier}`] = tier === 1 ? 'Усилить луч' : 'Настроить линзу';
    for (const stage of stages) for (const phase of stage.micro_phases) texts[`phase.${stage.macro_index + 1}.${phase.sequence_index}`] = `${phase.sequence_index}. ${phase.source_objective || 'Оборона сигнального пути'}`;

    const palette = { ...colors };
    const themeData = raw.theme?.data || {};
    const role = themeData.color_roles || {};
    Object.assign(palette, { background: role.background || colors.background, text: role.text || colors.text, accent: role.accent || colors.accent, danger: role.danger || colors.danger, success: role.success || colors.success });
    const lore = raw.lore?.world_context?.world_premise || {};
    const choices = [
      { choice_id: 'choice_signal', title_key: 'choice.signal', description_key: 'choice.signal.desc', category_key: 'ui.choice.category', modifiers: [{ required_components: ['Attack'], target_component: 'Attack', target_value: 'damage', operation: 'multiplier', value: 1.18 }] },
      { choice_id: 'choice_resin', title_key: 'choice.resin', description_key: 'choice.resin.desc', category_key: 'ui.choice.category', effects: [{ type: 'GrantResource', resource_id: 'res_002', amount: 35 }] },
      { choice_id: 'choice_lens', title_key: 'choice.lens', description_key: 'choice.lens.desc', category_key: 'ui.choice.category', modifiers: [{ required_components: ['Targeting'], target_component: 'Targeting', target_value: 'range', operation: 'multiplier', value: 1.16 }] }
    ];
    texts['choice.signal'] = 'Дальний сигнал'; texts['choice.signal.desc'] = 'Маяки наносят на 18% больше урона.';
    texts['choice.resin'] = 'Запас смолы'; texts['choice.resin.desc'] = 'Получить 35 смоляных гранул.';
    texts['choice.lens'] = 'Чистая линза'; texts['choice.lens.desc'] = 'Дальность маяков увеличится на 16%.';

    return {
      ...raw,
      theme: { ...raw.theme, title_key: 'ui.title', palette, texts, font: 'system-ui, -apple-system, Segoe UI, sans-serif', save_key: 'salt-lantern-wardens-v1', audio: { events: { click_ui: { wave: 'square', frequency: 800 }, collect_item: { wave: 'sine', frequency: 560 }, success_level: { wave: 'sine', frequency: 720 }, fail_level: { wave: 'triangle', frequency: 210 }, hit_damage: { wave: 'sine', frequency: 150 }, checkpoint: { wave: 'sine', frequency: 900 } }, music: {} } },
      lore: { ...raw.lore, world_premise: lore, viral_hook: raw.theme?.viral_hook || 'Удержи свет, пока море меняет маршрут.' },
      entities: defs,
      progression: { space_model: 'track_lane', genre_params: { ...(macros[0]?.genre_params || {}), control_model: 'TAP_ONLY', control_model_justification: 'Tower Defense управляется тапами по клеткам и кнопкам интерфейса; непрерывное движение отсутствует.' }, macro_levels: macros, stages_or_levels: stages, tutorial: { title_key: 'ui.tutorial.title', steps: [{ text_key: 'ui.tutorial.welcome' }], complete_condition: 'dismiss' }, choice_pool: choices, choice_interval_phases: 2, meta_upgrades: [], achievements: [], postgame: { mode: 'none', trigger: 'after_final_macro', reuses_entities: ['e_001', 'e_022'] }, signature_mechanics_registry: raw.theme?.signature_mechanics || [] },
      localization: { fallback_language: 'ru', supported_languages: ['ru'], languages: { ru: texts } },
      economy: { primary_resource: 'res_002', starting_balances: { res_002: 125, res_008: 0 }, low_resource_threshold: 20 },
      assets: { images: imageManifest, backgrounds: [], sprites: [], audio: [], music: [] },
      asset_lookup: Object.fromEntries(sourceEntities.map(entity => [entity.id, assetFor(entity.id)]).filter(([, asset]) => asset))
    };
  }

  window.normalizeGameData = normalizeGameData;
})();
